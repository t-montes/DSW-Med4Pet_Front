//import { agenda } from '../agenda/agenda';
//import { contacto } from '../contacto/contacto';
//import { medioDePagoPredeterminado } from '../medioDePagoPredeterminado/medioDePagoPredeterminado';


export class Cliente {
  id: number;
  nombre: string;
  calificacion: number;
//  agenda: Agenda;
//  contacto: Contacto;
//  medioDePagoPredeterminado: MedioDePagoPredeterminado;

constructor(
  id: number,
  nombre: string,
  calificacion: number,
//  agenda: Agenda,
//  contacto: Contacto,
//  medioDePagoPredeterminado: MedioDePagoPredeterminado,
) {
  this.id = id;
  this.nombre = nombre;
  this.calificacion = calificacion;
//  this.agenda: Agenda,
//  this.contacto: Contacto,
//  this.medioDePagoPredeterminado: MedioDePagoPredeterminado,
}
}
