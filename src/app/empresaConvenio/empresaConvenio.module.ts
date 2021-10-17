import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaConvenioListComponent } from './empresaConvenio-list/empresaConvenio-list.component'

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [EmpresaConvenioListComponent],
  declarations: [EmpresaConvenioListComponent]
})
export class EmpresaConvenioModule { }
