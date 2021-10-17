/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { CitaService } from './cita.service';

import {
  HttpTestingController,
  HttpClientTestingModule
} from '@angular/common/http/testing';

import faker from 'faker';
import { Cita } from './cita';
import { environment } from '../../environments/environment';

describe('Service: Cita', () => {
  let injector: TestBed;
  let service: CitaService;
  let httpMock: HttpTestingController;
  let apiUrl = environment.baseUrl + "citas";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CitaService]
    });
    injector = getTestBed();
    service = injector.get(CitaService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("getCitas() should return 10 records", () => {
    let mockCitas: Cita [] = [];
    for (let i = 1; i <= 10; i++) {
      let cita: Cita = new Cita(
        i,
        faker.date.past(),
        faker.lorem.sentence(),
        faker.random.number(),
        faker.random.boolean(),
        faker.random.number(),
        null,
        null,
        null
        );

      mockCitas.push(cita);
    }

    service.getCitas().subscribe((citas) => {
      expect(citas.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe("GET");
    req.flush(mockCitas);
  });
});
