/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { ContactoListComponent } from "./contacto-list.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import faker from "faker";
import { Contacto } from "../contacto";

describe("ContactoListComponent", () => {
 let component: ContactoListComponent;
 let fixture: ComponentFixture<ContactoListComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     declarations: [ContactoListComponent],
     imports: [HttpClientTestingModule],
   }).compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(ContactoListComponent);
   component = fixture.componentInstance;
   component.contactos = [
     new Contacto(
       faker.datatype.number(),
       faker.lorem.sentence(),
       faker.lorem.sentence(),
     ),
   ];
   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it("should create", () => {
   expect(component).toBeTruthy();
 });

 it("Should have an figcaption element ", () => {
   expect(debug.queryAll(By.css(".list-group-item"))[0].nativeElement.innerText).toContain(
    component.contactos[0].telefono
   );

   expect(debug.queryAll(By.css(".list-group-item"))[1].nativeElement.innerText).toContain(
     component.contactos[0].correo
   );
 });
});
