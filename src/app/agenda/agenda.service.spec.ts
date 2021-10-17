/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { AgendaService } from './agenda.service';

import {
  HttpTestingController,
  HttpClientTestingModule
} from '@angular/common/http/testing';

import faker from 'faker';
import { Agenda } from './agenda';
import { environment } from '../../environments/environment';

describe('Service: Agenda', () => {
  let injector: TestBed;
  let service: AgendaService;
  let httpMock: HttpTestingController;
  let apiUrl = environment.baseUrl + "agendas";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AgendaService]
    });
    injector = getTestBed();
    service = injector.get(AgendaService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("getAgendas() should return 10 records", () => {
    let mockAgendas: Agenda [] = [];
    for (let i = 1; i <= 10; i++) {
      let agenda: Agenda = new Agenda(
        i,
        faker.random.number(),
        faker.random.number(),
        faker.random.number(),
        null
        );

      mockAgendas.push(agenda);
    }

    service.getAgendas().subscribe((agendas) => {
      expect(agendas.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe("GET");
    req.flush(mockAgendas);
  });
});
