import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalificacionListarComponent} from './calificacion-listar/calificacion-listar.component'
import {CalificacionDetailComponent} from './calificacion-detail/calificacion-detail.component'
import {CalificacionCreateComponent} from './calificacion-create/calificacion-create.component'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [CalificacionListarComponent,CalificacionCreateComponent],
  declarations: [CalificacionListarComponent,CalificacionDetailComponent,CalificacionCreateComponent]
})
export class CalificacionModule { }
