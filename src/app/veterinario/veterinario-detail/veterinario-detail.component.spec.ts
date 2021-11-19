/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import faker from "faker";
import { VeterinarioDetailComponent } from './veterinario-detail.component';
import { VeterinarioDetail } from '../veterinarioDetail';
import { RegistroMedico } from 'src/app/registroMedico/registroMedico';
import { Agenda } from 'src/app/agenda/agenda';
import { Contacto } from 'src/app/contacto/contacto';

describe('VeterinarioDetailComponent', () => {
  let component: VeterinarioDetailComponent;
  let fixture: ComponentFixture<VeterinarioDetailComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeterinarioDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinarioDetailComponent);

    component = fixture.componentInstance;
    let contacto = new Contacto(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence()
    );

    let registroMedico = new RegistroMedico(
      faker.datatype.number(),
      faker.date.past(),
      faker.lorem.sentence()
    );

    let agenda = new Agenda(
      faker.datatype.number(),
      faker.datatype.number(),
      faker.datatype.number(),
      faker.datatype.number(),
      []
    );
    component.veterinarioDetail = new VeterinarioDetail(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.datatype.number(),
      contacto,
      registroMedico,
      agenda
    )


    fixture.detectChanges();
  });
/*
  it('should create', () => {
    expect(component).toBeTruthy();
  });
*/
});
