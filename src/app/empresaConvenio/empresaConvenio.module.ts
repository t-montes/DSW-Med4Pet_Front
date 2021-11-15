import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaConvenioListComponent } from './empresaConvenio-list/empresaConvenio-list.component';
import { EmpresaConvenioDetailComponent } from './empresaConvenio-detail/empresaConvenio-detail.component'

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [EmpresaConvenioListComponent],
  declarations: [EmpresaConvenioListComponent, EmpresaConvenioDetailComponent]
})
export class EmpresaConvenioModule { }
