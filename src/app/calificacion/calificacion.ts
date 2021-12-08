export class Calificacion
{
  id:number;
  creador:string;
  fecha:Date;
  puntaje:number;
  descripcion:string;
  constructor(id:number, creador: string, fecha: Date,puntaje:number,descripcion:string) {
    this.id = id;
    this.creador = creador;
    this.fecha = fecha;
    this.puntaje = puntaje;
    this.descripcion = descripcion;
  }
}
