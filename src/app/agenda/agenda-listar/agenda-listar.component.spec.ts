/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AgendaListarComponent } from './agenda-listar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import faker from 'faker';
import { Cita } from 'src/app/cita/cita';
import { Agenda } from '../agenda';

describe('AgendaListarComponent', () => {
  let component: AgendaListarComponent;
  let fixture: ComponentFixture<AgendaListarComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaListarComponent ],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaListarComponent);
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

    let citas = [new Cita(
      faker.random.number(),
      faker.date.past(),
      faker.lorem.sentence(),
      faker.random.number(),
      faker.random.boolean(),
      faker.random.number(),
      //paciente,
      //medioDePago,
      //serviciosTomados
    )];

    component.agendas = [
      new Agenda(
        faker.random.number(),
        faker.random.number(),
        faker.random.number(),
        faker.random.number(),
        citas
      )
    ]

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Should have a card header element ", ()=>{
    expect(debug.query(By.css(".card-header")).nativeElement.innerText).toContain(
      component.agendas[0].id
    );
  });
});
