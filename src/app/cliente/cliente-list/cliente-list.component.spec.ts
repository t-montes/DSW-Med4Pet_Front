/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClienteListComponent } from "./cliente-list.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import faker from "faker";
import { Cliente } from "../cliente";
//import { Agenda } from "src/app/agenda/agenda";
//import { Contacto } from "src/app/contacto/contacto";
//import { MedioDePagoPredeterminado } from "src/app/medioDePagoPredeterminado/medioDePagoPredeterminado";

describe("ClienteListarComponent", () => {
 let component: ClienteListComponent;
 let fixture: ComponentFixture<ClienteListComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     declarations: [ClienteListComponent],
     imports: [HttpClientTestingModule],
   }).compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(ClienteListComponent);
   component = fixture.componentInstance;

   component.clientes = [
     new Cliente(
      faker.random.number(),
      faker.lorem.sentence(),
      faker.random.number(),
      null
      )];

   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it("should create", () => {
   expect(component).toBeTruthy();
 });

 it("Should have an list-group-item element ", () => {
   expect(debug.queryAll(By.css(".list-group-item"))[0].nativeElement.innerText).toContain(
     component.clientes[0].nombre
   );

   expect(debug.queryAll(By.css(".list-group-item"))[1].nativeElement.innerText).toContain(
     component.clientes[0].calificacion
   );
 });
});
