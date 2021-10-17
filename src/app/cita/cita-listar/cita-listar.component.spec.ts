/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CitaListarComponent } from './cita-listar.component';

describe('CitaListarComponent', () => {
  let component: CitaListarComponent;
  let fixture: ComponentFixture<CitaListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitaListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
