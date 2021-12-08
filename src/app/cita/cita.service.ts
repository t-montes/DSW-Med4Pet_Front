import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CitaDetail } from './citaDetail';
import { environment } from '../../environments/environment';
import { Cita } from './cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private apiUrl:string = environment.baseUrl + 'citas';
  constructor(private http: HttpClient) { }
  getCitas(): Observable<CitaDetail[]> {
    return this.http.get<CitaDetail[]>(this.apiUrl);
  }

  createCita(cita:CitaDetail): Observable<CitaDetail> {
    return this.http.post<CitaDetail>(this.apiUrl, cita);
  }

  createCitaAgenda(citaId:number, agendaId:number):Observable<Cita> {
    return this.http.post<Cita>(environment.baseUrl+`agendas/${agendaId}/citas/${citaId}`, undefined);
  }
}
