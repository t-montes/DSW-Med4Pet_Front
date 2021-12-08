import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cita } from '../cita'
import { CitaService } from '../cita.service';
import { CitaDetail } from '../citaDetail';

@Component({
  selector: 'app-cita-create',
  templateUrl: './cita-create.component.html',
  styleUrls: ['./cita-create.component.css']
})
export class CitaCreateComponent implements OnInit {

  @Input() veterinarioId: number;
  @Input() agendaId: number;

  citaForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private citaService: CitaService,
    private router: Router) { }

  ngOnInit() {
    this.citaForm = this.formBuilder.group({
      fecha: ["", Validators.required],
      duracion: ["", Validators.required],
      costo: ["", Validators.required]
    });
  }

  createCita(newCita: CitaDetail){
    console.warn('La cita fue creada',newCita);
    newCita.disponible = true;
    newCita.estado = "PENDIENTE";
    newCita.medioDePago = null;
    newCita.paciente = null;
    //TODO - Service form adding
    //TODO - MedioDePago form adding
    this.citaService.createCita(newCita).subscribe(c => {
      this.toastr.success(`Duración:${newCita.duracion}`);
      this.citaService.createCitaAgenda(c.id, this.agendaId).subscribe(c2 => {
        this.toastr.success('La agenda ha sido asignada correctamente');
        this.router.navigate(['/veterinarios/'+this.veterinarioId]);
      });
      this.citaForm.reset();
    });
  }

  cancelCreation() {
    console.log("Cancelando ...");
    this.citaForm.reset();
  }

}
