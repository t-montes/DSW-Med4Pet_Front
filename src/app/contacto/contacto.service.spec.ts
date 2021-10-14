/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { ContactoService } from './contacto.service';

import {
  HttpTestingController,
  HttpClientTestingModule,
} from "@angular/common/http/testing";

import faker from "faker";
import { Contacto } from "./contacto";
import { environment } from "../../environments/environment";

describe('Service: Contacto', () => {
  let injector: TestBed;
  let service: ContactoService;
  let httpMock: HttpTestingController;
  let apiUrl = environment.baseUrl + "contactos";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ContactoService],
    });
    injector = getTestBed();
    service = injector.get(ContactoService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(()=>{
    httpMock.verify();
  });

  it("getPost() should return 10 records", ()=>{
    let mockPosts: Contacto[] = [];
    for(let i = 1; i<11; i++){
      let contacto = new Contacto(
        i,
        faker.lorem.sentence(),
        faker.lorem.sentence(),
      );
    mockPosts.push(contacto);
    }

    service.getContactos().subscribe((contactos)=>{
      expect(contactos.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe("GET");
    req.flush(mockPosts);
  });
});
