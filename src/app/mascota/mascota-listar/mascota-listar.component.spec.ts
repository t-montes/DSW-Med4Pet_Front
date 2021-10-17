/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { MascotaListarComponent } from "./mascota-listar.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import faker from "faker";
import { Mascota } from "../mascota";
import { Cita } from "src/app/cita/cita";
//import { Cliente } from "src/app/cliente/cliente";

describe("BookListarComponent", () => {
 let component: MascotaListarComponent;
 let fixture: ComponentFixture<MascotaListarComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     declarations: [MascotaListarComponent],
     imports: [HttpClientTestingModule],
   }).compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(MascotaListarComponent);
   component = fixture.componentInstance;
   let cita = new Cita(
     faker.random.number(),
     faker.lorem.sentence(),
     faker.lorem.sentence(),
     faker.random.number(),
     faker.random.boolean(),
     faker.random.number(),
     //paciente,
     //medioDePago,
     //faker.lorem.array()
   );



  /* let cliente = new Cliente(
    faker.lorem.sentence(),
    faker.random.number(),
     contacto,
     agenda,
     medioDePagoPredeterminado,
     faker.lorem.array(),
     faker.lorem.array()
  );
  */
   component.mascotas = [
     new Mascota(
       faker.random.number(),
       faker.lorem.sentence(),
       faker.random.number(),
       faker.lorem.sentence(),
       faker.image.imageUrl(),
       //faker.date.past(),
       //cita
       //cliente
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
     component.mascotas[0].nombre
   );

   expect(debug.query(By.css("figcaption")).nativeElement.innerText).toContain(
    component.mascotas[0].nombre
   );
 });
});
