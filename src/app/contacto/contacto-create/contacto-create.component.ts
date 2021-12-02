import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from "ngx-toastr";
import { Contacto } from '../contacto';
@Component({
  selector: 'app-contacto-create',
  templateUrl: './contacto-create.component.html',
  styleUrls: ['./contacto-create.component.scss']
})
export class ContactoCreateComponent implements OnInit {

  contactoForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService) { }

  createContacto(newContacto: Contacto){
    console.warn("el cliente fue creado", newContacto);
    this.showSuccess(newContacto);
    this.contactoForm.reset();
  }

  showSuccess(c: Contacto){
    this.toastr.success('Creado exitosamente!', 'Contacto ${c.correo}', {"progressBar": true, timeOut: 4000});
  }

  cancelCreation(){
    console.log("Cancelando ...");
    this.contactoForm.reset();
  }

  ngOnInit() {
    this.contactoForm = this.formBuilder.group({
      telefono: ["", Validators.required],
      correo: ["", [Validators.required, Validators.email]]
    })
  }

}
