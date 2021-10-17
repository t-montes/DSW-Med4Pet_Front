/* tslint:disable:no-unused-variable */
import { TestBed, async, inject, getTestBed } from "@angular/core/testing";
import { EmpresaConvenioService } from './empresaConvenio.service';

import {
 HttpTestingController,
 HttpClientTestingModule,
} from "@angular/common/http/testing";

import faker from "faker";
import { EmpresaConvenio } from "./empresaConvenio";
import { environment } from "../../environments/environment";

describe('Service: EmpresaConvenio', () => {
 let injector: TestBed;
 let service: EmpresaConvenioService;
 let httpMock: HttpTestingController;
 let apiUrl = environment.baseUrl + "EmpresaConvenio";

 beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientTestingModule],
     providers: [EmpresaConvenioService],
   });
   injector = getTestBed();
   service = injector.get(EmpresaConvenioService);
   httpMock = injector.get(HttpTestingController);
 });

 afterEach(() => {
   httpMock.verify();
 });

 it("getPost() should return 10 records", () => {
   let mockPosts: EmpresaConvenio[] = [];

   for (let i = 1; i < 11; i++) {
     let empresaConvenio = new EmpresaConvenio(
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       //null
     );

     mockPosts.push(empresaConvenio);
   }

   service.getEmpresaConvenio().subscribe((empresaConvenio) => {
     expect(empresaConvenio.length).toBe(10);
   });

   const req = httpMock.expectOne(apiUrl);
   expect(req.request.method).toBe("GET");
   req.flush(mockPosts);
 });
});
