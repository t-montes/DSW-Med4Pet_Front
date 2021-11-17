
import { Cita } from './cita';
import { Servicio } from '../servicio/servicio'
import { Mascota } from '../mascota/mascota'
import { MedioDePago } from '../medioDePago/medioDePago'

export class CitaDetail extends Cita {
  serviciosTomados : Array<Servicio>

  constructor (
    id: number,
    fecha: string,
    estado: String,
    costo: number,
    disponible: boolean,
    duracion: number,
    paciente: Mascota,
    medioDePago: MedioDePago,
    serviciosTomados:Array<Servicio>
  ){
    super(id,fecha,estado,costo,disponible,duracion,paciente,medioDePago)
    this.serviciosTomados = serviciosTomados;
  }
}
