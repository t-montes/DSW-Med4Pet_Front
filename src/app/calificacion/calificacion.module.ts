import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalificacionListarComponent} from './calificacion-listar/calificacion-listar.component'
import {CalificacionDetailComponent} from './calificacion-detail/calificacion-detail.component'

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CalificacionListarComponent],
  declarations: [CalificacionListarComponent,CalificacionDetailComponent]
})
export class CalificacionModule { }
