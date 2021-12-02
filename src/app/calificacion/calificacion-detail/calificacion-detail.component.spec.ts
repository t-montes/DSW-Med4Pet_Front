/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CalificacionDetailComponent } from './calificacion-detail.component';
import { Calificacion } from '../calificacion';
import faker from 'faker'

describe('CalificacionDetailComponent', () => {
  let component: CalificacionDetailComponent;
  let fixture: ComponentFixture<CalificacionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificacionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificacionDetailComponent);
    component = fixture.componentInstance;
    component.calificacionDetail =
      new Calificacion(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.date.past(),
        faker.datatype.number(),
        faker.lorem.sentence()
      );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
