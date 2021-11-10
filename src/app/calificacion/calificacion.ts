export class Calificacion
{
  creador:string;
  fecha:Date;
  puntaje:number;
  descripcion:string;
  constructor(creador: string, fecha: Date,puntaje:number,descripcion:string) {
    this.creador = creador;
    this.fecha = fecha;
    this.puntaje = puntaje;
    this.descripcion = descripcion;
  }
}
