/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CitaListarComponent } from './cita-listar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import faker from 'faker';
import { Cliente } from 'src/app/cliente/cliente';
import { Mascota } from 'src/app/mascota/mascota';
import { Pse } from 'src/app/pse/pse';
import { ServicioDetail } from 'src/app/servicio/servicioDetail';
import { CitaDetail } from '../citaDetail';

describe('CitaListarComponent', () => {
  let component: CitaListarComponent;
  let fixture: ComponentFixture<CitaListarComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitaListarComponent ],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaListarComponent);
    component = fixture.componentInstance;

    let medioDePago = new Pse(
      faker.random.number(),
      faker.random.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence()
    );
    let duenio = new Cliente(
      faker.random.number(),
      faker.lorem.sentence(),
      faker.random.number(),
      null
    );
    let paciente = new Mascota(
      faker.random.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.random.number(),
      duenio,
      []
    );
    let serviciosTomados = [new ServicioDetail(
      faker.random.number(),
      faker.lorem.sentence(),
      []
    )];

    component.citas = [
      new CitaDetail(
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
    ]

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
