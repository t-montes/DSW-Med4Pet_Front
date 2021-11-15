import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServicioDetail } from './servicioDetail';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private apiUrl:string = environment.baseUrl + 'servicios';
  constructor(private http: HttpClient) { }
  getServicios(): Observable<ServicioDetail[]> {
    return this.http.get<ServicioDetail[]>(this.apiUrl);
  }
}
