import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { EmpresaConvenio } from '../empresaConvenio';
import { EmpresaConvenioService } from '../empresaConvenio.service';

@Component({
  selector: 'app-empresaConvenio-create',
  templateUrl: './empresaConvenio-create.component.html',
  styleUrls: ['./empresaConvenio-create.component.css']
})
export class EmpresaConvenioCreateComponent implements OnInit {
  empresaConvenioForm: UntypedFormGroup;
  idContacto:number;
  yac:boolean=false;

  constructor(private formBuilder: UntypedFormBuilder,
    private toastr: ToastrService,
    private empresaConvenioService: EmpresaConvenioService
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
      servicio: ["", Validators.required]
    });
  }

  createEmpresaConvenio(newEmpresaConvenio: EmpresaConvenio ) {
    // Process checkout data here
    console.warn("la EmpresaConvenio fue creada", newEmpresaConvenio);

    this.empresaConvenioService.createEmpresaConvenio(newEmpresaConvenio).subscribe(ec => {
      this.toastr.success('Empresa Convenio creada exitosamente');
      this.empresaConvenioService.createContactoEmpresaConvenio(ec.id,this.idContacto).subscribe(c => {
        this.toastr.success('El contacto ha sido asignado correctamente');
      });
      this.empresaConvenioForm.reset();
    });

    this.empresaConvenioForm.reset();

  }

  cancelCreation() {
    console.log("Cancelando ...");
    this.empresaConvenioForm.reset();
  }
}
