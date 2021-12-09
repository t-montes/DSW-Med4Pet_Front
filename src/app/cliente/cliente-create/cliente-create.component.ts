import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {
  clienteForm: FormGroup;
  idContacto:number;
  yac:boolean= false;
  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService, private clienteService:ClienteService
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

    //-----------------------------------------------------------------
    // this.clientService.createClient(newClient).subscribe(client => {
    //   this.clientes.push(client);
    //  this.showSuccess(newClient);
    // });
    //------------------------------------------------------------------
    this.clienteForm.reset();

  }

  cancelCreation() {
    console.log("Cancelando ...");
    this.clienteForm.reset();
  }
}

