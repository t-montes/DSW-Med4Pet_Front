import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output() newItemEvent = new EventEmitter<number>();
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private contactoService: ContactoService) { }

  addNewItem(value: number) {
    this.newItemEvent.emit(value);
  }
  createContacto(newContacto: Contacto){
    console.warn("el cliente fue creado", newContacto);
    this.contactoService.createContacto(newContacto)
      .subscribe(c => {
        this.toastr.success('The contacto was created successfully',c.correo);
        this.addNewItem(c.id);
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
