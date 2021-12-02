import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegistroMedicoListarComponent} from './registroMedico-listar/registroMedico-listar.component'
import {RegistroMedicoCreateComponent} from './registroMedico-create/registroMedico-create.component'
import { ReactiveFormsModule } from '@angular/forms';
import {NgbDatepicker} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[RegistroMedicoListarComponent,RegistroMedicoCreateComponent],
  declarations: [RegistroMedicoListarComponent,RegistroMedicoCreateComponent]
})
export class RegistroMedicoModule { }
