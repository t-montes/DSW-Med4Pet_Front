import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoListComponent} from './contacto-list/contacto-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ContactoListComponent],
  declarations: [ContactoListComponent],
  providers : []
})
export class ContactoModule { }
