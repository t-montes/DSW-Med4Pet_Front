import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegistroMedicoListarComponent} from './registroMedico-listar/registroMedico-listar.component'

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[RegistroMedicoListarComponent],
  declarations: [RegistroMedicoListarComponent]
})
export class RegistroMedicoModule { }
