import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { TarjetaCreditoService } from 'src/app/tarjetaCredito/tarjetaCredito.service';

@Component({
  selector: 'app-tarjetaCredito-create',
  templateUrl: './tarjetaCredito-create.component.html',
  styleUrls: ['./tarjetaCredito-create.component.css']
})
export class TarjetaCreditoCreateComponent implements OnInit {
  tarjetaForm: UntypedFormGroup;
  constructor(private formBuilder: UntypedFormBuilder,
    private toastr: ToastrService,
    private tarjetaCreditoService: TarjetaCreditoService) { }


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
      this.tarjetaCreditoService.createTarjetaCredito(newTarjeta).subscribe(t => {
        this.toastr.success('Tarjeta de Crédito creada exitosamente');
      });
      this.tarjetaForm.reset();
    }


}
