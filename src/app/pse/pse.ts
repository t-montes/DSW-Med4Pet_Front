import { MedioDePago } from '../medioDePago/medioDePago';

export class Pse extends MedioDePago{
  id: number;
  banco: string;
  numeroTarjeta: string;

  constructor(id: number, nombre:string, banco:string, numeroTarjeta:string){
    super(nombre);
    this.id = id;
    this.banco = banco;
    this.numeroTarjeta = numeroTarjeta;
  }
}
