import { Agenda } from '../agenda/agenda';
import { Contacto } from '../contacto/contacto';
import { MedioDePago } from '../medioDePago/medioDePago';


export class Cliente {
  id: number;
  nombre: string;
  calificacion: number;
  agenda: Agenda;
  contacto: Contacto;
  medioDePagoPredeterminado: MedioDePago;

constructor(
  id: number,
  nombre: string,
  calificacion: number,
  agenda: Agenda,
  contacto: Contacto,
  medioDePagoPredeterminado: MedioDePago
) {
  this.id = id;
  this.nombre = nombre;
  this.calificacion = calificacion;
  this.agenda = agenda;
  this.contacto = contacto;
  this.medioDePagoPredeterminado = medioDePagoPredeterminado;
}
}
