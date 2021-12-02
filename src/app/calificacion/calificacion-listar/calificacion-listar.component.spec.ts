/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";


import {CalificacionListarComponent} from "./calificacion-listar.component"
import { HttpClientTestingModule } from "@angular/common/http/testing";
import faker from "faker";
import { Calificacion } from "../calificacion";

describe("CalificacionListarComponent", () => {
 let component: CalificacionListarComponent;
 let fixture: ComponentFixture<CalificacionListarComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     declarations: [CalificacionListarComponent],
     imports: [HttpClientTestingModule],
   }).compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(CalificacionListarComponent);
   component = fixture.componentInstance;

   component.calificaciones = [
     new Calificacion(
      faker.lorem.sentence(),
       faker.date.past(),
       faker.datatype.number(),
       faker.lorem.sentence(),
       null,
       null
     ),
   ];
   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it("should create", () => {
   expect(component).toBeTruthy();
 });

 it("Should have an li element ", () => {
   expect(debug.query(By.css("li")).nativeElement.innerText).toContain(
     component.calificaciones[0].creador
   );
 });
});
