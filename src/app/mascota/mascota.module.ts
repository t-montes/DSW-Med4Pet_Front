import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotaListarComponent} from './mascota-listar/mascota-listar.component';
import { MascotaDetailComponent} from './mascota-detail/mascota-detail.component';
import { MascotaCreateComponent} from './mascota-create/mascota-create.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  declarations: [MascotaListarComponent, MascotaDetailComponent, MascotaCreateComponent],
  exports: [MascotaListarComponent, MascotaCreateComponent],
  providers: []
})
export class MascotaModule { }
