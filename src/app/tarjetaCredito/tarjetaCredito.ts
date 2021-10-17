import { MedioDePago } from '../medioDePago/medioDePago';

export class TarjetaCredito extends MedioDePago{
  id: number;
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
    super(nombre);
    this.id = id;
    this.numeroTarjeta = numeroTarjeta;
    this.codigoSeguridad = codigoSeguridad;
    this.fechaVencimiento = fechaVencimiento;
  }
}
