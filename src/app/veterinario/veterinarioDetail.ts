import { Calificacion } from '../calificacion/calificacion';
import { Servicio } from '../servicio/servicio';
import {Veterinario} from './veterinario';

export class VeterinarioDetail extends Veterinario{
  calificaciones: Array<Calificacion>;
  serviciosOfrecidos: Array<Servicio>;
}
