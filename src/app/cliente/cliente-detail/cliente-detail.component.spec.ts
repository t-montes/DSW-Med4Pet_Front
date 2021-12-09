/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClienteDetailComponent } from './cliente-detail.component';
import { Cliente } from '../cliente';
import faker from "faker";
import { Contacto } from 'src/app/contacto/contacto';
import { Mascota } from 'src/app/mascota/mascota';
import { ClienteDetail } from '../clienteDetail';

describe('ClienteDetailComponent', () => {
  let component: ClienteDetailComponent;
  let fixture: ComponentFixture<ClienteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteDetailComponent);
    component = fixture.componentInstance;

    let contacto = new Contacto(
      faker.random.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      )

    let mascota = new Mascota(
      faker.random.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.datatype.number(),
      null,
      null
      )

    component.clienteDetail = new ClienteDetail(
      faker.random.number(),
      faker.lorem.sentence(),
      faker.random.number(),
      contacto
      );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

