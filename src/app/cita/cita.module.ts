import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitaListarComponent } from './cita-listar/cita-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CitaListarComponent],
  exports: [CitaListarComponent]
})
export class CitaModule { }
