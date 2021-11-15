import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotaListarComponent} from './mascota-listar/mascota-listar.component';
import { MascotaDetailComponent} from './mascota-detail/mascota-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MascotaListarComponent, MascotaDetailComponent],
  exports: [MascotaListarComponent],
  providers: []
})
export class MascotaModule { }
