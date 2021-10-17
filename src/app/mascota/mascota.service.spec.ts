/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from "@angular/core/testing";
import { MascotaService } from "./mascota.service";

import {
 HttpTestingController,
 HttpClientTestingModule,
} from "@angular/common/http/testing";

import faker from "faker";
import { Mascota } from "./mascota";
import { environment } from "../../environments/environment";

describe("Service: Mascota", () => {
 let injector: TestBed;
 let service: MascotaService;
 let httpMock: HttpTestingController;
 let apiUrl = environment.baseUrl + "mascotas";

 beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientTestingModule],
     providers: [MascotaService],
   });
   injector = getTestBed();
   service = injector.get(MascotaService);
   httpMock = injector.get(HttpTestingController);
 });

 afterEach(() => {
   httpMock.verify();
 });

 it("getPost() should return 10 records", () => {
   let mockPosts: Mascota[] = [];

   for (let i = 1; i < 11; i++) {
     let mascota = new Mascota(
       i,
       faker.random.id(),
       faker.lorem.nombre(),
       faker.lorem.raza(),
       faker.lorem.ubicacion(),
       /*faker.random.edad(),
       faker.random.duenio(),
       faker.random.citasAtendidas(),
       null*/
     );

     mockPosts.push(mascota);
   }

   service.getMascotas().subscribe((mascotas) => {
     expect(mascotas.length).toBe(10);
   });

   const req = httpMock.expectOne(apiUrl);
   expect(req.request.method).toBe("GET");
   req.flush(mockPosts);
 });
});
