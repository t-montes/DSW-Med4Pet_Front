/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ServicioListarComponent } from './servicio-listar.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import faker from "faker";
import { Servicio } from "../servicio";

import { HttpClientModule } from '@angular/common/http';

describe('ServicioListarComponent', () => {
  let component: ServicioListarComponent;
  let fixture: ComponentFixture<ServicioListarComponent>;
  let debug: DebugElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ServicioListarComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioListarComponent);
    component = fixture.componentInstance;

    component.servicios = [
      new Servicio(
        faker.datatype.number(),
        faker.lorem.sentence(),
        null,
        null
      )
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Should have an figcaption element ", ()=>{
    expect(debug.queryAll(By.css(".list-group-item"))[0].nativeElement.innerText).toContain(
      component.servicios[0].nombre
    );

  });
});
