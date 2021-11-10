import { Contacto } from "../contacto/contacto";
import { RegistroMedico } from "../registroMedico/registroMedico";
import { Agenda } from "../agenda/agenda";
import { Calificacion } from "../calificacion/calificacion";

export class Veterinario {
  //Atributos
  id: number;
  nombre: string;
  especialidad: string;
  certificadoEntrenamiento: string;
  experienciaPrevia: string;
  calificacion: number;
  //Asociaciones
  contacto: Contacto;
  registroMedico: RegistroMedico;
  agenda: Agenda;
  constructor(
    id: number,
    nombre: string,
    especialidad: string,
    certificadoEntrenamiento: string,
    experienciaPrevia: string,
    calificacion: number,
    contacto: Contacto,
    registroMedico: RegistroMedico,
    agenda: Agenda,
    ){
      this.id = id;
      this.nombre = nombre;
      this.especialidad = especialidad;
      this.certificadoEntrenamiento = certificadoEntrenamiento;
      this.experienciaPrevia = experienciaPrevia;
      this.calificacion = calificacion;
      this.contacto = contacto;
      this.registroMedico = registroMedico;
      this.agenda = agenda;
    }
}
