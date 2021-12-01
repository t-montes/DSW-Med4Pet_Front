import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr/toastr/toastr.service';
import { Cita } from '../cita'

@Component({
  selector: 'app-cita-create',
  templateUrl: './cita-create.component.html',
  styleUrls: ['./cita-create.component.css']
})
export class CitaCreateComponent implements OnInit {

  citaForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.citaForm = this.formBuilder.group({
//      fecha: ["", Validators.required],
      duracion: ["", Validators.required],
      costo: ["", Validators.required]

    });
  }

}
