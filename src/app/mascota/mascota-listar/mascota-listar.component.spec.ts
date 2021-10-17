/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { MascotaListarComponent } from "./mascota-listar.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import faker from "faker";
import { Mascota } from "../mascota";
import { Cita } from "src/app/cita/cita";
import { Cliente } from "src/app/cliente/cliente";
import { HttpClientModule } from '@angular/common/http';

describe("MascotaListarComponent", () => {
 let component: MascotaListarComponent;
 let fixture: ComponentFixture<MascotaListarComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     declarations: [MascotaListarComponent],
     imports: [HttpClientTestingModule]
   }).compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(MascotaListarComponent);
   component = fixture.componentInstance;
   
   component.mascotas = [
     new Mascota(
      faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        null,
        null
     )
   ];
   fixture.detectChanges();
   debug = fixture.debugElement;
 });
/*
 it("should create", () => {
   expect(component).toBeTruthy();
 });

 it("Should have an figcaption element ", () => {
   expect(debug.query(By.css(".card-header")).nativeElement.innerText).toContain(
     component.mascotas[0].nombre
   );
   */
 });

