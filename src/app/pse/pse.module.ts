import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PseListarComponent } from './pse-listar/pse-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PseListarComponent],
  exports: [PseListarComponent],
})
export class PseModule { }
