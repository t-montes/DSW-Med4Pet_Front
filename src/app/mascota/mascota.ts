import { Cita } from "../cita/cita";
import { Cliente } from "../cliente/cliente";

export class Mascota {
  id: number;
  nombre: string;
  tipoMascota: string;
  raza: string;
  ubicacion: string;
  edad: number;
  duenio: Cliente;
  citas: Cita[];


constructor(
    id: number,
    nombre: string,
    tipoMascota: string,
    raza: string,
    ubicacion: string,
    edad: number,
    duenio : Cliente,
    citas: Cita[]
  ){
    this.id = id;
    this.nombre = nombre;
    this.tipoMascota = tipoMascota;
    this.raza = raza;
    this.ubicacion = ubicacion;
    this.edad = edad;
    this.duenio = duenio;
    this.citas = citas;
  }
}


