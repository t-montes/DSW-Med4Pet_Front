/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import faker from 'faker';
import { Mascota } from '../../mascota/mascota';
import { Pse } from '../../pse/pse';
import { Servicio } from '../../servicio/servicio';
import { Cliente } from '../../cliente/cliente';
import { CitaDetail } from '../citaDetail';
import { CitaDetailComponent } from './cita-detail.component';

describe('CitaDetailComponent', () => {
  let component: CitaDetailComponent;
  let fixture: ComponentFixture<CitaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaDetailComponent);
    component = fixture.componentInstance;

    let duenio = new Cliente(
      faker.random.number(),
      faker.lorem.sentence(),
      faker.random.number(),
      null,
      null,
      null
    );

    let paciente = new Mascota(
      faker.random.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.random.number(),
      duenio,
      []
    );
    let medioDePago = new Pse(
      faker.random.number(),
      faker.random.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence()
    );
    let serviciosTomados = [new Servicio(
      faker.random.number(),
      faker.lorem.sentence(),
      [],
      []
    )];

    component.citaDetail = new CitaDetail(
        faker.random.number(),
        faker.date.past(),
        faker.lorem.sentence(),
        faker.random.number(),
        faker.random.boolean(),
        faker.random.number(),
        paciente,
        medioDePago,
        serviciosTomados
      )

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
