/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { TarjetaCreditoService } from './tarjetaCredito.service';

import {
    HttpTestingController,
    HttpClientTestingModule,
} from '@angular/common/http/testing';

import { TarjetaCredito } from "./tarjetaCredito";
import faker from 'faker';
import { environment } from "../../environments/environment";

describe('Service: TarjetaCredito', () => {
  let injector: TestBed;
  let service: TarjetaCreditoService;
  let httpMock: HttpTestingController;
  let apiUrl = environment.baseUrl + 'tarjetas';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TarjetaCreditoService],
    });
    injector = getTestBed();
    service = injector.get(TarjetaCreditoService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  })

  it ("getPost() should return 10 records", () =>{
    let mockPosts: TarjetaCredito[] = [];

    for(let i = 1; i < 11; i++){
      let tarjeta = new TarjetaCredito(
        i,
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.date.past()
        )
      mockPosts.push(tarjeta);
    }

    service.getTarjetas().subscribe((tarjetas) =>{
      expect(tarjetas.length).toBe(10);
    })

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe("GET");
    req.flush(mockPosts);
  });
});

