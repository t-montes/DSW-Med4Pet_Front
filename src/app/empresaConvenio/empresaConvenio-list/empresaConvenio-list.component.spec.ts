/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EmpresaConvenioListComponent } from './empresaConvenio-list.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import faker from "faker";
import { EmpresaConvenio } from "../empresaConvenio";
//import { Contacto } from "src/app/contacto/contacto";

describe('EmpresaConvenioListComponent', () => {
  let component: EmpresaConvenioListComponent;
  let fixture: ComponentFixture<EmpresaConvenioListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmpresaConvenioListComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaConvenioListComponent);
    component = fixture.componentInstance;

    component.empresaConvenio = [
      new EmpresaConvenio(
       faker.random.number(),
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       null
      ),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Should have an list-group-item element ", () => {
   expect(debug.queryAll(By.css(".list-group-item"))[0].nativeElement.innerText).toContain(
     component.empresaConvenio[0].nombre
  );

  expect(debug.queryAll(By.css(".list-group-item"))[1].nativeElement.innerText).toContain(
    component.empresaConvenio[0].nit
  );

  expect(debug.queryAll(By.css(".list-group-item"))[2].nativeElement.innerText).toContain(
    component.empresaConvenio[0].servicio
  );
 });
});
