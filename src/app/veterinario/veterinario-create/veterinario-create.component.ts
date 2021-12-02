import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from "ngx-toastr";
import { Veterinario } from '../veterinario';
import { VeterinarioService } from '../veterinario.service';
import { VeterinarioDetail } from '../veterinarioDetail';

@Component({
  selector: 'app-veterinario-create',
  templateUrl: './veterinario-create.component.html',
  styleUrls: ['./veterinario-create.component.scss']
})
export class VeterinarioCreateComponent implements OnInit {
  veterinarioForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private veterinarioService: VeterinarioService) { }

  createVeterinario(newVeterinario: VeterinarioDetail){
    newVeterinario.calificacion = 0.0;
    console.warn("el veterinario fue creado", newVeterinario);
    this.veterinarioService.createVeterinario(newVeterinario)
      .subscribe(newVeterinario=>{
        this.showSuccess(newVeterinario);
        this.veterinarioForm.reset();
      });

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
