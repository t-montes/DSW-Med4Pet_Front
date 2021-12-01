export class Calificacion
{
  creador:string;
  fecha:Date;
  puntaje:number;
  descripcion:string;
  cliente:number;
  veterinario:number;
  constructor(creador: string, fecha: Date,puntaje:number,descripcion:string,cliente:number,veterinario:number) {
    this.creador = creador;
    this.fecha = fecha;
    this.puntaje = puntaje;
    this.descripcion = descripcion;
    this.cliente=cliente;
    this.veterinario = veterinario;
  }
}
