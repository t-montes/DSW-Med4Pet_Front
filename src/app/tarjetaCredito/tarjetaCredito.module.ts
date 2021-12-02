import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaCreditoListarComponent } from './tarjetaCredito-listar/tarjetaCredito-listar.component';
import { TarjetaCreditoCreateComponent } from './tarjetaCredito-create/tarjetaCredito-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [TarjetaCreditoListarComponent, TarjetaCreditoCreateComponent],
  exports: [TarjetaCreditoListarComponent, TarjetaCreditoCreateComponent],
})
export class TarjetaCreditoModule { }
