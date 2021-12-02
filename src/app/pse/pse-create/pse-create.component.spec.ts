/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PseCreateComponent } from './pse-create.component';

describe('PseCreateComponent', () => {
  let component: PseCreateComponent;
  let fixture: ComponentFixture<PseCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PseCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PseCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //it('should create', () => {
  //  expect(component).toBeTruthy();
  //});
});
