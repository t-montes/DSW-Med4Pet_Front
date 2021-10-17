export class EmpresaConvenio {
  nombre: String;
  nit: String;
  servicio: String;
  //contacto: Contacto

  constructor(
    nombre: String,
    nit: String,
    servicio: String,
   //contacto: Contacto,
  ) {
    this.nombre = nombre;
    this.nit = nit;
    this.servicio = servicio;
  //  this.contacto: Contacto,
  }
}
