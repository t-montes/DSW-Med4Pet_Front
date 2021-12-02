import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioListarComponent} from './servicio-listar/servicio-listar.component';
import { ServicioDetailComponent } from './servicio-detail/servicio-detail.component';
import { ServicioCreateComponent } from './servicio-create/servicio-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ServicioListarComponent, ServicioDetailComponent, ServicioCreateComponent],
  exports: [ServicioListarComponent,ServicioCreateComponent],
  providers: []
})
export class ServicioModule { }
