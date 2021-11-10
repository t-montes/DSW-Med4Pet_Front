/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EmpresaConvenioDetailComponent } from './empresaConvenio-detail.component';
import { EmpresaConvenio } from '../empresaConvenio';

import faker from "faker";
import { Contacto } from 'src/app/contacto/contacto';

describe('EmpresaConvenioDetailComponent', () => {
  let component: EmpresaConvenioDetailComponent;
  let fixture: ComponentFixture<EmpresaConvenioDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaConvenioDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaConvenioDetailComponent);
    component = fixture.componentInstance;

    let contacto = new Contacto(
      faker.random.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      )

    component.empresaConvenioDetail = new EmpresaConvenio(
      faker.random.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      contacto
      );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
