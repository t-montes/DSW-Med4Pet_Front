/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AgendaListarComponent } from './agenda-listar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import faker from 'faker';
import { Mascota } from 'src/app/mascota/mascota';
import { Servicio } from 'src/app/servicio/servicio';
import { Pse } from 'src/app/pse/pse';
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

    let paciente = new Mascota(
      faker.random.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.random.number(),
      null,
      []
    );
    let medioDePago = new Pse(
      faker.random.number(),
      faker.random.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence()
    );

    let citas = [
      /*Not Detail*/
      new Cita(
        faker.random.number(),
        faker.date.past(),
        faker.lorem.sentence(),
        faker.random.number(),
        faker.random.boolean(),
        faker.random.number(),
        paciente,
        medioDePago
      )
    ]

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
