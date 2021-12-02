import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicioDetail } from './servicioDetail';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Servicio } from './servicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private apiUrl:string = environment.baseUrl + 'servicios';
  constructor(private http: HttpClient) { }
  getServicios(): Observable<ServicioDetail[]> {
    return this.http.get<ServicioDetail[]>(this.apiUrl);
  }
  createServicio(servicio:Servicio): Observable<Servicio> {
    return this.http.post<Servicio>(this.apiUrl,servicio);
  }
}
