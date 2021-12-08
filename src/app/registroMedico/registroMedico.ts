export class RegistroMedico
{
  id:number
  identificacion:string;
  fechaExpedicion:Date;
  imagen:string;
  constructor(id:number,identificacion: string, fechaExpedicion: Date,imagen:string) {
    this.id = id;
    this.identificacion=identificacion;
    this.fechaExpedicion = fechaExpedicion;
    this.imagen = imagen;
  }
}
