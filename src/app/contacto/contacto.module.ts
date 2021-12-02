import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoListComponent} from './contacto-list/contacto-list.component';
import { ContactoCreateComponent} from './contacto-create/contacto-create.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ContactoListComponent, ContactoCreateComponent],
  declarations: [ContactoListComponent, ContactoCreateComponent],
  providers : []
})
export class ContactoModule { }
