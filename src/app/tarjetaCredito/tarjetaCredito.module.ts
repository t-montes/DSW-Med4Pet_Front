import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaCreditoListarComponent } from './tarjetaCredito-listar/tarjetaCredito-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],

  exports: [TarjetaCreditoListarComponent],
  declarations: [TarjetaCreditoListarComponent],
})
export class TarjetaCreditoModule { }
