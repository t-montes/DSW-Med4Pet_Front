import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeterinarioListComponent} from './veterinario-list/veterinario-list.component';
import { VeterinarioDetailComponent} from './veterinario-detail/veterinario-detail.component';
import { CitaModule } from '../cita/cita.module';

@NgModule({
  imports: [
    CommonModule,
    CitaModule
  ],
  exports: [VeterinarioListComponent],
  declarations: [VeterinarioListComponent, VeterinarioDetailComponent],
  providers: []
})
export class VeterinarioModule { }
