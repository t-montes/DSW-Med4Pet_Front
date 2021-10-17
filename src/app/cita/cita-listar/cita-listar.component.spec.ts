/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CitaListarComponent } from './cita-listar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import faker from 'faker';
import { Agenda } from 'src/app/agenda/agenda';
//import { Cliente } from 'src/app/cliente/cliente';
//import { MedioDePago } from 'src/app/medioDePago/medioDePago';
//import { Servicio } from 'src/app/servicio/servicio';
import { Cita } from '../cita';

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
    /*
    let paciente = new Cliente(
      faker.random.number(),
    );
    let medioDePago = new MedioDePago(
      faker.random.number(),
    );
    let serviciosTomados = [new Servicio(
      faker.random.number(),
    )];
    */

    component.citas = [
      new Cita(
        faker.random.number(),
        faker.date.past(),
        faker.lorem.sentence(),
        faker.random.number(),
        faker.random.boolean(),
        faker.random.number(),
        //paciente,
        //medioDePago,
        //serviciosTomados
      )
    ]

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Should have a card header element", ()=>{
    expect(debug.query(By.css(".card-header")).nativeElement.innerText).toContain(
      component.citas[0].id
    );
  });
});
