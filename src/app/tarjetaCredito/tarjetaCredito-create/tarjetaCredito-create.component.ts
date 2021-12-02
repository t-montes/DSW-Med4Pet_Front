import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-tarjetaCredito-create',
  templateUrl: './tarjetaCredito-create.component.html',
  styleUrls: ['./tarjetaCredito-create.component.css']
})
export class TarjetaCreditoCreateComponent implements OnInit {
  tarjetaForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService) { }


    ngOnInit() {
      this.tarjetaForm = this.formBuilder.group({
        numeroTarjeta: ["", [Validators.required, Validators.minLength(12), Validators.maxLength(12)]],
        codigoSeguridad: ["", Validators.required],
        fechaVencimiento: ["", Validators.required]
      })
    }

    cancelCreation(){
      console.log("Cancelando ...");
      this.tarjetaForm.reset();
    }

    createTarjeta(newTarjeta: any){
      console.warn("La tarjeta fue creada", newTarjeta);
      this.tarjetaForm.reset();
    }


}
