export class Contacto {
  id: number;
  telefono: string;
  correo: string;

  constructor(id: number, telefono: string, correo: string){
    this.id=id;
    this.telefono = telefono;
    this.correo = correo;
  }
}
