import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Calificacion } from '../calificacion';
import { CalificacionService } from '../calificacion.service';

@Component({
  selector: 'app-calificacion-create',
  templateUrl: './calificacion-create.component.html',
  styleUrls: ['./calificacion-create.component.scss']
})
export class CalificacionCreateComponent implements OnInit {
  @Input () veterinarioId: number
  @Input () clienteId:number
  calificacionForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private toastrService: ToastrService, private calificacionService:CalificacionService) { }

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
    newCalificacion.veterinario = null;
    newCalificacion.cliente = this.clienteId;
  }
  if (this.clienteId ==null)
  {
    newCalificacion.veterinario = this.veterinarioId;
    newCalificacion.cliente = null;
  }

  this.calificacionService.createCalificacion(newCalificacion).subscribe(calif => {
  this.toastrService.success(calif.creador);
  this.calificacionForm.reset();
   });
  this.calificacionForm.reset();


}
cancelCreation() {
  console.log("Cancelando ...");
  this.calificacionForm.reset();
}

}
