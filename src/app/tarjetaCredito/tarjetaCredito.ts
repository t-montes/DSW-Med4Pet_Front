import { MedioDePago } from '../medioDePago/medioDePago';

export class TarjetaCredito extends MedioDePago{
  numeroTarjeta: string;
  codigoSeguridad: string;
  fechaVencimiento: Date;

  constructor(
    id: number,
    nombre:string,
    numeroTarjeta: string,
    codigoSeguridad: string,
    fechaVencimiento: Date
  ){
    super(id,nombre);
    this.numeroTarjeta = numeroTarjeta;
    this.codigoSeguridad = codigoSeguridad;
    this.fechaVencimiento = fechaVencimiento;
  }
}
