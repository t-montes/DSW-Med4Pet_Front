import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Mascota } from '../mascota';
import {MascotaService} from "../mascota.service";

@Component({
  selector: 'app-mascota-create',
  templateUrl: './mascota-create.component.html',
  styleUrls: ['./mascota-create.component.scss']
})
export class MascotaCreateComponent implements OnInit {

  mascotaForm: FormGroup;
 mascotas: Mascota[];

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {

  }

  createMascota(newMascota: Mascota) {
    // Process checkout data here
    console.warn("la mascota fue creada", newMascota);
    this.showSuccess(newMascota);

    //this.servicioService.createServicio(newServicio).subscribe(servicio => {
      //this.servicios.push(servicio);
      //this.showSuccess(newServicio);
    //});

    this.mascotaForm.reset();

  }

  showSuccess(m: Mascota) {
    this.toastr.success('Creado exitosamente!', `Mascota ${m.nombre}`, { "progressBar": true, timeOut: 4000 });
  }

  cancelCreation() {
    console.log("Cancelando ...");
    this.mascotaForm.reset();
  }

  ngOnInit() {
    this.mascotaForm = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(2)]]
    });
  }
}
