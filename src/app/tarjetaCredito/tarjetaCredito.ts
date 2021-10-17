export class TarjetaCredito {
  id: number;
  numeroTarjeta: number;
  codigoSeguridad: number;
  fechaVencimiento: any;

  constructor(
    id: number,
    numeroTarjeta: number,
    codigoSeguridad: number,
    fechaVencimiento: any
  ){
    this.id = id;
    this.numeroTarjeta = numeroTarjeta;
    this.codigoSeguridad = codigoSeguridad;
    this.fechaVencimiento = fechaVencimiento;
  }
}
