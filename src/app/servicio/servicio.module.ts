import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioListarComponent} from './servicio-listar/servicio-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ServicioListarComponent],
  exports: [ServicioListarComponent]
})
export class ServicioModule { }
