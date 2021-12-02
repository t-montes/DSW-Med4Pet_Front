/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from "@angular/core/testing";
import { RegistroMedicoService } from "./registroMedico.service";

import {
 HttpTestingController,
 HttpClientTestingModule,
} from "@angular/common/http/testing";

import faker from "faker";
import { RegistroMedico } from "./registroMedico";
import { environment } from "../../environments/environment";

describe("Service: RegistroMedico", () => {
 let injector: TestBed;
 let service: RegistroMedicoService;
 let httpMock: HttpTestingController;
 let apiUrl = environment.baseUrl + "registrosMedicos";

 beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientTestingModule],
     providers: [RegistroMedicoService],
   });
   injector = getTestBed();
   service = injector.get(RegistroMedicoService);
   httpMock = injector.get(HttpTestingController);
 });

 afterEach(() => {
   httpMock.verify();
 });

 it("getPost() should return 10 records", () => {
   let mockPosts: RegistroMedico[] = [];

   for (let i = 1; i < 11; i++) {
     let registroMedico = new RegistroMedico(
      faker.random.number(),
       faker.lorem.sentence(),
       faker.date.past(),
       faker.image.imageUrl()
     );

     mockPosts.push(registroMedico);
   }

   service.getRegistrosMedicos().subscribe((registroMedico) => {
     expect(registroMedico.length).toBe(10);
   });

   const req = httpMock.expectOne(apiUrl);
   expect(req.request.method).toBe("GET");
   req.flush(mockPosts);
 });
});
