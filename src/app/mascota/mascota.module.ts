import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotaListarComponent} from './mascota-listar/mascota-listar.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MascotaListarComponent],
  exports: [MascotaListarComponent]
})
export class MascotaModule { }
