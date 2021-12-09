import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { MascotaModule } from '../mascota/mascota.module';
=======
import {ContactoModule} from '../contacto/contacto.module'
>>>>>>> 3c9562edd390b58ec8d3b353b51cb05fe7b8af6d

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
<<<<<<< HEAD
    MascotaModule
=======
    ContactoModule
>>>>>>> 3c9562edd390b58ec8d3b353b51cb05fe7b8af6d
  ],
  declarations: [ClienteListComponent, ClienteCreateComponent, ClienteDetailComponent],
  exports: [ClienteListComponent, ClienteCreateComponent],

})
export class ClienteModule { }
