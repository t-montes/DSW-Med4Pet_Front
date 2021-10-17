import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeterinarioListComponent} from './veterinario-list/veterinario-list.component'

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [VeterinarioListComponent],
  declarations: [VeterinarioListComponent],
  providers: []
})
export class VeterinarioModule { }
