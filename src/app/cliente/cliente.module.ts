import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import {ContactoModule} from '../contacto/contacto.module'
import {MascotaModule} from '../mascota/mascota.module'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MascotaModule,
    ContactoModule
  ],
  declarations: [ClienteListComponent, ClienteCreateComponent, ClienteDetailComponent],
  exports: [ClienteListComponent, ClienteCreateComponent],

})
export class ClienteModule { }
