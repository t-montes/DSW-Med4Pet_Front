
import { Cita } from '../cita/cita';

export class Agenda{
  id: number;
  numeroCitasPendientes: number;
  numeroCitasRealizadas: number;
  numeroCitasCanceladas: number;
  citas: Cita[];

  constructor(
    id:number,
    numeroCitasPendientes: number,
    numeroCitasRealizadas: number,
    numeroCitasCanceladas: number,
    citas: Cita[],
  ){
    this.id = id;
    this.numeroCitasPendientes = numeroCitasPendientes;
    this.numeroCitasRealizadas = numeroCitasRealizadas;
    this.numeroCitasCanceladas = numeroCitasCanceladas;
    this.citas = citas;
  }
}
