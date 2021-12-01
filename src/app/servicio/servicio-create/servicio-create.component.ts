import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Servicio } from '../servicio';
import {ServicioService} from "../servicio.service";

@Component({
  selector: 'app-servicio-create',
  templateUrl: './servicio-create.component.html',
  styleUrls: ['./servicio-create.component.scss']
})
export class ServicioCreateComponent implements OnInit {

 servicioForm: FormGroup;
  servicios: Servicio[];

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {

  }

  createServicio(newServicio: Servicio) {
    // Process checkout data here
    console.warn("el servicio fue creado", newServicio);
    this.showSuccess(newServicio);

    //this.servicioService.createServicio(newServicio).subscribe(servicio => {
      //this.servicios.push(servicio);
      //this.showSuccess(newServicio);
    //});

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
