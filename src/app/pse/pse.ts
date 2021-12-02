import { MedioDePago } from '../medioDePago/medioDePago';

export class Pse extends MedioDePago{
  banco: string;
  numeroTarjeta: string;

  constructor(id: number, nombre:string, banco:string, numeroTarjeta:string){
    super(id,nombre);
    this.banco = banco;
    this.numeroTarjeta = numeroTarjeta;
  }
}
