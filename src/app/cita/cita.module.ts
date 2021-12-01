import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitaListarComponent } from './cita-listar/cita-listar.component';
import { CitaDetailComponent } from './cita-detail/cita-detail.component';
import { CalificacionModule } from '../calificacion/calificacion.module';

@NgModule({
  imports: [
    CommonModule,
    CalificacionModule
  ],
  declarations: [CitaListarComponent, CitaDetailComponent],
  exports: [CitaListarComponent]
})
export class CitaModule { }
