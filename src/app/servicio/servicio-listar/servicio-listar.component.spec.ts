/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ServicioListarComponent } from './servicio-listar.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import faker from "faker";
import { Cita } from 'src/app/cita/cita';
import { Veterinario } from 'src/app/veterinario/veterinario';
import { ServicioDetail } from '../servicioDetail';



describe('ServicioListarComponent', () => {
  let component: ServicioListarComponent;
  let fixture: ComponentFixture<ServicioListarComponent>;
  let debug: DebugElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ServicioListarComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioListarComponent);
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
    component.servicios = [
      new ServicioDetail(
        faker.datatype.number(),
        faker.lorem.sentence(),
        veterinarios
      )
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Should have an figcaption element ", ()=>{
    expect(debug.queryAll(By.css(".list-group-item"))[0].nativeElement.innerText).toContain(
      component.servicios[0].nombre
    );
  });
});

