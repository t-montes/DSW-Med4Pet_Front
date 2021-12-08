import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MedioDePagoCreateComponent } from './medioDePago-create/medioDePago-create.component'
import { PseModule } from '../pse/pse.module';
import { TarjetaCreditoModule } from '../tarjetaCredito/tarjetaCredito.module';

@NgModule({
  imports: [
    CommonModule,
    PseModule,
    TarjetaCreditoModule
  ],
  declarations: [MedioDePagoCreateComponent],
  exports: [MedioDePagoCreateComponent]
})
export class MedioDePagoModule { }
