import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Calificacion } from '../calificacion';
import { CalificacionService } from '../calificacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calificacion-create',
  templateUrl: './calificacion-create.component.html',
  styleUrls: ['./calificacion-create.component.scss']
})
export class CalificacionCreateComponent implements OnInit {
  @Input () veterinarioId: number
  @Input () clienteId:number
  calificacionForm: UntypedFormGroup;
  constructor(private formBuilder: UntypedFormBuilder, private toastrService: ToastrService, private calificacionService:CalificacionService,
    private router: Router) { }

ngOnInit() {
  this.calificacionForm = this.formBuilder.group({
    creador: ["", [Validators.required, Validators.minLength(2)]],
    puntaje: ["", [Validators.required]],
    descripcion:[""]
  });
}
createCalificacion(newCalificacion: Calificacion) {
  // Process checkout data here
  console.warn("la calificacion fue creada", newCalificacion);
  newCalificacion.fecha = new Date()
  if (this.veterinarioId ==null)
  {
    this.calificacionService.createCalificacion(newCalificacion).subscribe(calif => {
      this.toastrService.success(calif.creador);
      this.calificacionService.createCalificacionCliente(calif.id, this.clienteId).subscribe(calif2 => {
        this.toastrService.success('El cliente ha sido asignado correctamente');
        this.router.navigate(['/clientes/'+this.clienteId]);
      });
      this.calificacionForm.reset();
    });
  }
  if (this.clienteId ==null)
  {
    this.calificacionService.createCalificacion(newCalificacion).subscribe(calif => {
      this.toastrService.success(calif.creador);
      this.calificacionService.createCalificacionVeterinario(calif.id, this.veterinarioId).subscribe(calif2 => {
        this.toastrService.success('El veterinario ha sido asignado correctamente');
        this.router.navigate(['/veterinarios/'+this.veterinarioId]);
      });
      this.calificacionForm.reset();
    });
  }

}
cancelCreation() {
  console.log("Cancelando ...");
  this.calificacionForm.reset();
}

}
