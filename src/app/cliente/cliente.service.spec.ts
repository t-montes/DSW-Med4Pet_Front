/* tslint:disable:no-unused-variable */
import { TestBed, async, inject, getTestBed } from "@angular/core/testing";
import { ClienteService } from './cliente.service';

import {
 HttpTestingController,
 HttpClientTestingModule,
} from "@angular/common/http/testing";

import faker from "faker";
import { Cliente } from "./cliente";
import { environment } from "../../environments/environment";

describe('Service: Cliente', () => {
 let injector: TestBed;
 let service: ClienteService;
 let httpMock: HttpTestingController;
 let apiUrl = environment.baseUrl + "Clientes";

 beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientTestingModule],
     providers: [ClienteService],
   });
   injector = getTestBed();
   service = injector.get(ClienteService);
   httpMock = injector.get(HttpTestingController);
 });

 afterEach(() => {
   httpMock.verify();
 });

 it("getPost() should return 10 records", () => {
   let mockPosts: Cliente[] = [];

   for (let i = 1; i < 11; i++) {
     let cliente = new Cliente(
       faker.lorem.sentence(),
       faker.random.number(),
       //null
       //null
       //null
     );

     mockPosts.push(cliente);
   }

   service.getClientes().subscribe((clientes) => {
     expect(clientes.length).toBe(10);
   });

   const req = httpMock.expectOne(apiUrl);
   expect(req.request.method).toBe("GET");
   req.flush(mockPosts);
 });
});
