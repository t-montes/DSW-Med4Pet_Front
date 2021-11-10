import { Mascota } from './mascota';
import { Cliente } from '../cliente/cliente';

export class MascotaDetail extends Mascota {
  duenio : Cliente;
}
