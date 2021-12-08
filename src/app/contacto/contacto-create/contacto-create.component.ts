import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from "ngx-toastr";
import { Contacto } from '../contacto';
import { ContactoService } from '../contacto.service';
@Component({
  selector: 'app-contacto-create',
  templateUrl: './contacto-create.component.html',
  styleUrls: ['./contacto-create.component.scss']
})
export class ContactoCreateComponent implements OnInit {

  contactoForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private contactoService: ContactoService) { }

  createContacto(newContacto: Contacto){
    console.warn("el cliente fue creado", newContacto);
    this.contactoService.createContacto(newContacto)
      .subscribe(newContacto => {
        this.toastr.success('The author was created successfully');
        this.contactoForm.reset()
      }, err => {
        this.toastr.error(err, 'Error');
      });
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
