import { Calificacion } from '../calificacion/calificacion';
import {Veterinario} from './veterinario';

export class VeterinarioDetail extends Veterinario{
  calificaciones: Array<Calificacion>;
}
