import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaListarComponent } from './agenda-listar/agenda-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AgendaListarComponent],
  exports: [AgendaListarComponent]
})
export class AgendaModule { }
