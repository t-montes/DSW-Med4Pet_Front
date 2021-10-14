import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto';
import { ContactoService } from '../contacto.service';

@Component({
  selector: 'app-contacto-list',
  templateUrl: './contacto-list.component.html',
  styleUrls: ['./contacto-list.component.scss']
})
export class ContactoListComponent implements OnInit {

  constructor(private contactoService: ContactoService) { }
  contactos: Array<Contacto>;

  getContactos(): void {
    this.contactoService.getContactos()
      .subscribe(contactos => {
        this.contactos = contactos;
        console.log(contactos)
      });
  }
  ngOnInit() {
    this.getContactos();
  }

}
