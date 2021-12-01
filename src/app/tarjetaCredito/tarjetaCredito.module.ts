import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaCreditoListarComponent } from './tarjetaCredito-listar/tarjetaCredito-listar.component';
import { TarjetaCreditoCreateComponent } from './tarjetaCredito-create/tarjetaCredito-create.component';

@NgModule({
  imports: [
    CommonModule
  ],

  exports: [TarjetaCreditoListarComponent, TarjetaCreditoCreateComponent],
  declarations: [TarjetaCreditoListarComponent, TarjetaCreditoCreateComponent],
})
export class TarjetaCreditoModule { }
