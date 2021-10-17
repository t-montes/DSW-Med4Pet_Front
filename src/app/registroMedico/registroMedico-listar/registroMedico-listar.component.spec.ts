/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";



import { HttpClientTestingModule } from "@angular/common/http/testing";
import faker from "faker";
import {RegistroMedicoListarComponent} from "./registroMedico-listar.component"
import { RegistroMedico } from "../registroMedico";

describe("RegistroMedicoListarComponent", () => {
 let component: RegistroMedicoListarComponent;
 let fixture: ComponentFixture<RegistroMedicoListarComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     declarations: [RegistroMedicoListarComponent],
     imports: [HttpClientTestingModule],
   }).compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(RegistroMedicoListarComponent);
   component = fixture.componentInstance;

   component.registrosMedicos = [
    new RegistroMedico(
      faker.lorem.sentence(),
      faker.date.past(),
      faker.image.imageUrl()
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
     component.registrosMedicos[0].id
   );
 });
});
