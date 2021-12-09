import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-empresaConvenio-create',
  templateUrl: './empresaConvenio-create.component.html',
  styleUrls: ['./empresaConvenio-create.component.css']
})
export class EmpresaConvenioCreateComponent implements OnInit {
  empresaConvenioForm: FormGroup;
  idContacto:number;
  yac:boolean=false;

  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { }
  addContacto(contacto:number)
    {
      this.idContacto=contacto;
      this.yac = true;
      console.log(this.idContacto);
    }
  ngOnInit() {
    this.empresaConvenioForm = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(2)]],
      nit: ["", Validators.required],
      servicio: ["", Validators.required, Validators.minLength(2)]
    });
  }

  createEmpresaConvenio(newEmpresaConvenio: any ) {
    // Process checkout data here
    console.warn("la EmpresaConvenio fue creada", newEmpresaConvenio);

    //-----------------------------------------------------------------
    // this.clientService.createClient(newClient).subscribe(client => {
    //   this.empresaConvenio.push(client);
    //  this.showSuccess(newClient);
    // });
    //------------------------------------------------------------------
    this.empresaConvenioForm.reset();

  }

  cancelCreation() {
    console.log("Cancelando ...");
    this.empresaConvenioForm.reset();
  }
}
