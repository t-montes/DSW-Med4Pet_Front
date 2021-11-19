import { Veterinario } from "../veterinario/veterinario";
import { Cita } from "../cita/cita";

export class Servicio {
  id: number;
  nombre: string;

constructor(
    id: number,
    nombre: string
  ){
    this.id = id;
    this.nombre = nombre;
  }
}
