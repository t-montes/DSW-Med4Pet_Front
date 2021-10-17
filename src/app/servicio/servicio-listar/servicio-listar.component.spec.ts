/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { ServicioListarComponent } from "./servicio-listar.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import faker from "faker";
import { Servicio } from "../servicio";
import { Cita } from "src/app/cita/cita";
//import { Veterinario } from "src/app/veterinario/veterinario";

describe("BookListarComponent", () => {
 let component: ServicioListarComponent;
 let fixture: ComponentFixture<ServicioListarComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     declarations: [ServicioListarComponent],
     imports: [HttpClientTestingModule],
   }).compileComponents();
 }));

 
 beforeEach(() => {
   fixture = TestBed.createComponent(ServicioListarComponent);
   component = fixture.componentInstance;
   /*let cita = new Cita(
     faker.random.number(),
     faker.lorem.sentence()
   );
   let veterinario = new Veterinario(
    faker.lorem.sentence(),
    especialidad,
    faker.lorem.sentence(),
    faker.random.array(),
    faker.random.number()
  );
  
  let cita = new Cita(
    faker.lorem.sentence(),
    especialidad,
    faker.lorem.sentence(),
    faker.random.array(),
    faker.random.number()
  );
  */
   component.servicios = [
     new Servicio(
      faker.lorem.sentence(),
      faker.lorem.sentence()
      //veterinario,
      //cita
     ),
   ];
   fixture.detectChanges();
   debug = fixture.debugElement;
 });


 it("should create", () => {
   expect(component).toBeTruthy();
 });

 it("Should have an figcaption element ", () => {
   expect(debug.query(By.css("figcaption")).nativeElement.innerText).toContain(
     component.servicios[0].nombre
   );

  expect(debug.query(By.css("figcaption")).nativeElement.innerText).toContain(
     component.servicios[0].nombre
   );
 });
});
