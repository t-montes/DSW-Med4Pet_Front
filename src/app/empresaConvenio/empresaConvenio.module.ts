import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaConvenioListComponent } from './empresaConvenio-list/empresaConvenio-list.component';
import { EmpresaConvenioDetailComponent } from './empresaConvenio-detail/empresaConvenio-detail.component';
import { EmpresaConvenioCreateComponent } from './empresaConvenio-create/empresaConvenio-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [EmpresaConvenioListComponent, EmpresaConvenioCreateComponent],
  declarations: [EmpresaConvenioListComponent, EmpresaConvenioDetailComponent, EmpresaConvenioCreateComponent]
})
export class EmpresaConvenioModule { }
