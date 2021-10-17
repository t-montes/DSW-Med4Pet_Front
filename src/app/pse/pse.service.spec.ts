/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { PseService } from './pse.service';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from "@angular/common/http/testing";

import faker from "faker";
import { Pse } from "./pse";
import { environment } from "../../environments/environment";

describe('Service: Pse', () => {

 let injector: TestBed;
 let service: PseService;
 let httpMock: HttpTestingController;
 let apiUrl = environment.baseUrl + "pses";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PseService]
    });
    injector = getTestBed();
    service = injector.get(PseService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  })

  it ("GetPost() should return 10 records", () => {
    let mockPosts: Pse[] = [];

    for (let i = 1; i < 11; i++){
      let pse = new Pse(
      i,
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence()
      );
      mockPosts.push(pse);
    }

    service.getPses().subscribe((pses) => {
      expect(pses.length).toBe(10);
    })

  const req = httpMock.expectOne(apiUrl);
  expect(req.request.method).toBe("GET");
  req.flush(mockPosts);
  });
});
