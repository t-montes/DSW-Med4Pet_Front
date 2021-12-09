import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente'
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Contacto } from '../contacto/contacto';
import { Mascota } from '../mascota/mascota';
import { Calificacion } from '../calificacion/calificacion';
import { ClienteDetail } from './clienteDetail';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

private apiUrl:string = environment.baseUrl + 'clientes';
constructor(private http: HttpClient) { }

getClientes(): Observable<ClienteDetail[]> {
  return this.http.get<ClienteDetail[]>(this.apiUrl);
}

createCliente(cliente:Cliente): Observable<Cliente>{
  return this.http.post<Cliente>(this.apiUrl, cliente);
}

createContactoCliente(clienteId:number, contactoId:number): Observable<Contacto> {
  return this.http.post<Contacto>(environment.baseUrl+`clientes/${clienteId}/contactos/${contactoId}`,undefined);
}

createMascotaCliente(clienteId:number, mascotaId:number): Observable<Mascota> {
  return this.http.post<Mascota>(environment.baseUrl+`clientes/${clienteId}/mascotas/${mascotaId}`,undefined);
}

createCalificacionCliente(clienteId:number, calificacionId:number): Observable<Calificacion> {
  return this.http.post<Calificacion>(environment.baseUrl+`clientes/${clienteId}/calificaciones/${calificacionId}`,undefined);
}

}
