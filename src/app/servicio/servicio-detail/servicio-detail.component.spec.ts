/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import faker from 'faker';
import { Veterinario } from '../../veterinario/veterinario';
import { Cita } from '../../cita/cita';
import { ServicioDetail } from '../servicioDetail';
import { ServicioDetailComponent } from './servicio-detail.component';

describe('ServicioDetailComponent', () => {
  let component: ServicioDetailComponent;
  let fixture: ComponentFixture<ServicioDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioDetailComponent);
    component = fixture.componentInstance;



    let veterinarios = [new Veterinario(
      faker.random.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.random.number(),
      null,
      null,
      null
    )];

    component.servicioDetail = new ServicioDetail(
        faker.random.number(),
        faker.lorem.sentence(),
        veterinarios
      )

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
