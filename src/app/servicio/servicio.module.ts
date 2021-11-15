import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioListarComponent} from './servicio-listar/servicio-listar.component';
import { ServicioDetailComponent } from './servicio-detail/servicio-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ServicioListarComponent, ServicioDetailComponent],
  exports: [ServicioListarComponent],
  providers: []
})
export class ServicioModule { }
