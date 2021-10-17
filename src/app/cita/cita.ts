
//import { Servicio } from '../servicio/servicio';
//import { Mascota } from '../mascota/mascota';
//import { MedioDePago } from '../medioDePago/medioDePago';

export class Cita{
  id: number;
  fecha: Date;
  estado: String;
  costo: number;
  disponible: boolean;
  duracion: number;
  //paciente: Mascota;
  //medioDePago: MedioDePago;
  //serviciosTomados : Servicio[];

  constructor(
    id: number,
    fecha: Date,
    estado: String,
    costo: number,
    disponible: boolean,
    duracion: number,
    //paciente: Mascota;
    //medioDePago: MedioDePago;
    //serviciosTomados : Servicio[];
  ){
    this.id = id;
    this.fecha = new Date(fecha);
    this.estado = estado;
    this.costo = costo;
    this.disponible = disponible;
    this.duracion = duracion;
    //this.paciente = paciente;
    //this.medioDePago = medioDePago;
    //this.serviciosTomados = serviciosTomados;
  }
}
