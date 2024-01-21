import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Servicio } from '../servicio';
import {ServicioService} from "../servicio.service";

@Component({
  selector: 'app-servicio-create',
  templateUrl: './servicio-create.component.html',
  styleUrls: ['./servicio-create.component.scss']
})
export class ServicioCreateComponent implements OnInit {

 servicioForm: UntypedFormGroup;
  servicios: Servicio[];

  constructor(
    private formBuilder: UntypedFormBuilder,
    private toastr: ToastrService,
    private servicio: ServicioService
  ) {

  }

  createServicio(newServicio: Servicio) {
    // Process checkout data here
    console.warn("el servicio fue creado", newServicio);
    this.servicio.createServicio(newServicio).subscribe(serv => {
      this.toastr.success(serv.nombre);
      this.servicioForm.reset();
       });
    this.showSuccess(newServicio);
    this.servicioForm.reset();

  }

  showSuccess(s: Servicio) {
    this.toastr.success('Creado exitosamente!', `Servicio ${s.nombre}`, { "progressBar": true, timeOut: 4000 });
  }

  cancelCreation() {
    console.log("Cancelando ...");
    this.servicioForm.reset();
  }

  ngOnInit() {
    this.servicioForm = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(2)]]
    });
  }
}
