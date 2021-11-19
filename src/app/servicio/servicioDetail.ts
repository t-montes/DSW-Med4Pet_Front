import { Cita } from '../cita/cita';
import { Servicio } from '../servicio/servicio'
import { Veterinario } from '../veterinario/veterinario'

export class ServicioDetail extends Servicio {
  prestadores : Array<Veterinario>

  constructor (
    id: number,
    nombre: string,
    prestadores: Array<Veterinario>
  ){
    super(id,nombre)
    this.prestadores = prestadores;
  }
}
