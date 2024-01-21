import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {
  clienteForm: UntypedFormGroup;
  idContacto:number;
  yac:boolean= false;
  constructor(private formBuilder: UntypedFormBuilder,
    private toastr: ToastrService, private clienteService:ClienteService,
    private router:Router
  ) { }

  addContacto(contacto:number)
    {
      this.idContacto=contacto;
      this.yac = true;
      console.log(this.idContacto);
    }

  ngOnInit() {
    this.clienteForm = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(2)]]
    });
  }

  createCliente(newCliente: Cliente ) {
    // Process checkout data here
    console.warn("el cliente fue creado", newCliente);
    newCliente.calificacion = 0.0;
    this.clienteService.createCliente(newCliente).subscribe(client => {
      this.toastr.success('Cliente creado correctamente');
      this.clienteService.createContactoCliente(client.id, this.idContacto).subscribe(co => {
        this.toastr.success('El contacto ha sido asignado correctamente')
        this.router.navigate(['/clientes']);
      });
     });
    this.clienteForm.reset();

  }

  cancelCreation() {
    console.log("Cancelando ...");
    this.clienteForm.reset();
  }
}

