//import { Cita } from "../cita/cita";
//import { Veterinario } from "../veterinario/veterinario";

export class Servicio {
  id: number;
  nombre: string;
 // veterinarios: Veterinario[];
 // citas: Cita[];


constructor(
    id: number,
    nombre: string
    //veterinarios : Veterinario[];
     // citas: Cita[];
  ){
    this.id = id;
    this.nombre = nombre;
    //this.veterinarios = veterinarios;
    //this.citas = citas;
  }
}
