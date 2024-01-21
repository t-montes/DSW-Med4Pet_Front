import { Component,Input, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { ClienteService } from 'src/app/cliente/cliente.service';
import { Mascota } from '../mascota';
import {MascotaService} from "../mascota.service";

@Component({
  selector: 'app-mascota-create',
  templateUrl: './mascota-create.component.html',
  styleUrls: ['./mascota-create.component.scss']
})
export class MascotaCreateComponent implements OnInit {
  @Input () duenioId:number
  mascotaForm: UntypedFormGroup;
  mascotas: Mascota[];

  constructor(
    private formBuilder: UntypedFormBuilder,
    private toastr: ToastrService,
    private mascotaService:MascotaService,
    private clienteService:ClienteService
  ) {}


  ngOnInit() {
    this.mascotaForm = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(2)]],
      tipoMascota: ["", Validators.required],
      raza: ["", [Validators.required, Validators.minLength(2)]],
      edad: ["", [Validators.required]],
      ubicacion: ["", [Validators.required, Validators.minLength(2)]]
    });
  }
  createMascota(newMascota: Mascota) {
    // Process checkout data here
    console.warn("el servicio fue creado", newMascota);
    this.mascotaService.createMascota(newMascota).subscribe(masc => {
      this.toastr.success(masc.nombre);
      this.clienteService.createMascotaCliente(this.duenioId, masc.id).subscribe(cl => {
        this.toastr.success("Mascota asignada exitosamente")
      });
      this.mascotaForm.reset();
       });

  }

  showSuccess(m: Mascota) {
    this.toastr.success('Creado exitosamente!', `Mascota ${m.nombre}`, { "progressBar": true, timeOut: 4000 });
  }

  cancelCreation() {
    console.log("Cancelando ...");
    this.mascotaForm.reset();
  }


}
