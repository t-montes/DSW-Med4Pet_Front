import { Calificacion } from '../calificacion/calificacion';
import { Mascota } from '../mascota/mascota';
import {Cliente} from './cliente';


export class ClienteDetail extends Cliente {
  calificaciones: Array<Calificacion>;
  mascotas: Array<Mascota>;
}
