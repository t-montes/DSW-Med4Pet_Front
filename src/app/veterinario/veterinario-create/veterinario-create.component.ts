import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from "ngx-toastr";
import { Veterinario } from '../veterinario';

@Component({
  selector: 'app-veterinario-create',
  templateUrl: './veterinario-create.component.html',
  styleUrls: ['./veterinario-create.component.scss']
})
export class VeterinarioCreateComponent implements OnInit {
  veterinarioForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService) { }

  createVeterinario(newVeterinario: Veterinario){
    console.warn("el veterinario fue creado", newVeterinario);
    this.showSuccess(newVeterinario);
    this.veterinarioForm.reset();
  }
  showSuccess(v: Veterinario){
    this.toastr.success('Creado exitosamente!', 'Veterinario ${{v.nombre}}', {"progressBar": true, timeOut: 4000});
  }

  cancelCreation(){
    console.log("Cancelando ...");
    this.veterinarioForm.reset();
  }
  ngOnInit() {
    this.veterinarioForm = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(2)]],
      especialidad: ["", Validators.required],
      certificadoEntrenamiento: ["", Validators.required],
      experienciaPrevia: ["", Validators.required]
    })
  }

}
