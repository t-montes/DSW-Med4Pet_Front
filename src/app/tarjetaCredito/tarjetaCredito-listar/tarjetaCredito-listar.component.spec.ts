/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TarjetaCreditoListarComponent } from './tarjetaCredito-listar.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import faker from "faker";
import { TarjetaCredito } from "../tarjetaCredito";


describe('TarjetaCreditoListarComponent', () => {
  let component: TarjetaCreditoListarComponent;
  let fixture: ComponentFixture<TarjetaCreditoListarComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaCreditoListarComponent ],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaCreditoListarComponent);
    component = fixture.componentInstance;
    component.tarjetas = [new TarjetaCredito(faker.random.number(),faker.random.number(), faker.random.number(), faker.lorem.sentence())]
    fixture.detectChanges();
    debug = fixture.DebugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Should have an figcaption element ", () => {
    expect(debug.query(By.css("figcaption")).nativeElement.innerText).toContain(
      component.tarjetas[0].numeroTarjeta
    );
  });
});
