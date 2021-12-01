import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PseListarComponent } from './pse-listar/pse-listar.component';
import { PseCreateComponent } from './pse-create/pse-create.component'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [PseListarComponent, PseCreateComponent],
  exports: [PseListarComponent, PseCreateComponent],
})
export class PseModule { }
