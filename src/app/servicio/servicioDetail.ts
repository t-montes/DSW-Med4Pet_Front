import { Cita } from '../cita/cita';
import { Servicio } from '../servicio/servicio'
import { Veterinario } from '../veterinario/veterinario'

export class ServicioDetail extends Servicio {
  veterinarios : Array<Veterinario>

  constructor (
    id: number,
    nombre: string,
    veterinarios: Array<Veterinario>,
    citas: Array<Cita>
  ){
    super(id,nombre,veterinarios,citas)
    this.veterinarios = veterinarios;

  }
}
