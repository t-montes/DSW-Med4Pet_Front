/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from "@angular/core/testing";
import { ServicioService } from "./servicio.service";

import {
 HttpTestingController,
 HttpClientTestingModule,
} from "@angular/common/http/testing";

import faker from "faker";
import { Servicio } from "./servicio";
import { environment } from "../../environments/environment";

describe("Service: Servicio", () => {
 let injector: TestBed;
 let service: ServicioService;
 let httpMock: HttpTestingController;
 let apiUrl = environment.baseUrl + "servicios";

 beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientTestingModule],
     providers: [ServicioService],
   });
   injector = getTestBed();
   service = injector.get(ServicioService);
   httpMock = injector.get(HttpTestingController);
 });

 afterEach(() => {
   httpMock.verify();
 });

 it("getServicios() should return 10 records", () => {
   let mockPosts: Servicio[] = [];

   for (let i = 1; i < 11; i++) {
     let servicio = new Servicio(
       i,
       faker.lorem.sentence(),
       null
     );

     mockPosts.push(servicio);
   }

   service.getServicios().subscribe((servicios) => {
     expect(servicios.length).toBe(10);
   });

   const req = httpMock.expectOne(apiUrl);
   expect(req.request.method).toBe("GET");
   req.flush(mockPosts);
 });
});
