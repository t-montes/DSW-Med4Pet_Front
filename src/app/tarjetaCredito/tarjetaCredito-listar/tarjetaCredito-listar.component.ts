import { Component, OnInit } from '@angular/core';
import { TarjetaCredito } from '../tarjetaCredito';
import { TarjetaCreditoService } from '../tarjetaCredito.service';

@Component({
  selector: 'app-tarjetaCredito-listar',
  templateUrl: './tarjetaCredito-listar.component.html',
  styleUrls: ['./tarjetaCredito-listar.component.css']
})
export class TarjetaCreditoListarComponent implements OnInit {

  constructor(private tarjetaCreditoService: TarjetaCreditoService) {}

   tarjetas: Array<TarjetaCredito>;
   ngOnInit() {
    this.getTarjetas();
  }

  getTarjetas(): void {
    this.tarjetaCreditoService.getTarjetas().suscribe(tarjetas => {
      this.tarjetas = tarjetas;
    });
  }

}
