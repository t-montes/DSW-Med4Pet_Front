import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Calificacion} from './calificacion'
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalificacionService {
  private apiUrl:string = environment.baseUrl + 'calificaciones';
  constructor(private http: HttpClient) { }
  getCalificaciones(): Observable<Calificacion[]> {
    return this.http.get<Calificacion[]>(this.apiUrl);
  }

  createCalificacion(calificacion:Calificacion): Observable<Calificacion> {
    return this.http.post<Calificacion>(this.apiUrl,calificacion);
  }

  createCalificacionVeterinario(calificacionId:number, veterinarioId:number): Observable<Calificacion> {
    console.log(environment.baseUrl+`veterinarios/${veterinarioId}/calificaciones/${calificacionId}`);
    return this.http.post<Calificacion>(environment.baseUrl+`veterinarios/${veterinarioId}/calificaciones/${calificacionId}`, undefined);
  }

  createCalificacionCliente(calificacionId:number, clienteId:number): Observable<Calificacion> {
    return this.http.post<Calificacion>(environment.baseUrl+`clientes/${clienteId}/calificaciones/${calificacionId}`, undefined);
  }

}
