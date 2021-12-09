import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeterinarioListComponent} from './veterinario-list/veterinario-list.component';
import { VeterinarioDetailComponent} from './veterinario-detail/veterinario-detail.component';
import { CitaModule } from '../cita/cita.module';
import { CalificacionModule } from '../calificacion/calificacion.module';
import { VeterinarioCreateComponent } from './veterinario-create/veterinario-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import {RegistroMedicoModule} from '../registroMedico/registroMedico.module'
import {ContactoModule} from '../contacto/contacto.module'
@NgModule({
  imports: [
    ContactoModule,
    RegistroMedicoModule,
    CalificacionModule,
    ReactiveFormsModule,
    CommonModule,
    CitaModule
  ],
  exports: [VeterinarioListComponent, VeterinarioCreateComponent ],
  declarations: [VeterinarioListComponent, VeterinarioDetailComponent, VeterinarioCreateComponent],
  providers: []
})
export class VeterinarioModule { }
