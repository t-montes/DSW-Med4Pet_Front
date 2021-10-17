export class Pse {
  id: number;
  banco: string;
  numeroTarjeta: string;

  constructor(id: number, banco:string, numeroTarjeta:string){
    this.id = id;
    this.banco = banco;
    this.numeroTarjeta = numeroTarjeta;
  }
}
