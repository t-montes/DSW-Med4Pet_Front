export class EmpresaConvenio {
  id: number;
  nombre: String;
  nit: String;
  servicio: String;
  //contacto: Contacto

  constructor(
    id: number,
    nombre: String,
    nit: String,
    servicio: String,
   //contacto: Contacto,
  ) {
    this.id = id;
    this.nombre = nombre;
    this.nit = nit;
    this.servicio = servicio;
  //  this.contacto: Contacto,
  }
}
