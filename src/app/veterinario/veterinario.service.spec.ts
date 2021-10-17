/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { VeterinarioService } from './veterinario.service';

import {
  HttpTestingController,
  HttpClientTestingModule,
} from "@angular/common/http/testing";

import faker from "faker";
import { Veterinario } from "./veterinario";
import { environment } from "../../environments/environment";
import { HttpClientModule } from '@angular/common/http';

describe('Service: Veterinario', () => {
  let injector: TestBed;
  let service: VeterinarioService;
  let httpMock: HttpTestingController;
  let apiUrl = environment.baseUrl + "veterinarios";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VeterinarioService],
    });
    injector = getTestBed();
    service = injector.get(VeterinarioService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(()=>{
    httpMock.verify();
  });

  it("getPost() should return 10 records", ()=>{
    let mockPosts: Veterinario[] = [];
    for(let i = 1; i<11; i++){
      let veterinario = new Veterinario(
        i,
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        null
      );
    mockPosts.push(veterinario);
    }

    service.getVeterinarios().subscribe((veterinarios)=>{
      expect(veterinarios.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe("GET");
    req.flush(mockPosts);
  });
});
