import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

  ],
  declarations: [ClienteListComponent, ClienteCreateComponent],
  exports: [ClienteListComponent, ClienteCreateComponent],

})
export class ClienteModule { }
