import { Contacto } from '../contacto/contacto';
import { Mascota } from '../mascota/mascota';


export class Cliente {
  id: number;
  nombre: string;
  calificacion: number;
  contacto: Contacto;

constructor(
  id: number,
  nombre: string,
  calificacion: number,
  contacto: Contacto

) {
  this.id = id;
  this.nombre = nombre;
  this.calificacion = calificacion;
  this.contacto = contacto;

}
}
