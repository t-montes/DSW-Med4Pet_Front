export class RegistroMedico
{
  id:String;
  fechaExpedicion:Date;
  imagen:string;
  constructor(id: string, fechaExpedicion: Date,imagen:string) {
    this.id = id;
    this.fechaExpedicion = fechaExpedicion;
    this.imagen = imagen;
  }
}
