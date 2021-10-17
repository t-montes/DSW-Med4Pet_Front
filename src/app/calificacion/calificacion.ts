export class Calificacion
{
  creador:string;
  fecha:Date;
  puntaje:number;
  constructor(creador: string, fecha: Date,puntaje:number) {
    this.creador = creador;
    this.fecha = fecha;
    this.puntaje = puntaje;
  }
}
