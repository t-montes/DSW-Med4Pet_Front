import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitaListarComponent } from './cita-listar/cita-listar.component';
import { CitaDetailComponent } from './cita-detail/cita-detail.component';
import { CitaCreateComponent } from './cita-create/cita-create.component';
import { CalificacionModule } from '../calificacion/calificacion.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MedioDePagoModule } from '../medioDePago/medioDePago.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MedioDePagoModule
  ],
  declarations: [CitaListarComponent, CitaDetailComponent, CitaCreateComponent],
  exports: [CitaListarComponent, CitaCreateComponent]
})
export class CitaModule { }
