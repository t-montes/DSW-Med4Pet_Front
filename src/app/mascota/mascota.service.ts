import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Mascota } from './mascota';
import { MascotaDetail } from './mascotaDetail';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  private apiUrl:string = environment.baseUrl + 'mascotas';
  constructor(private http: HttpClient) { }
  getMascotas(): Observable<Array<MascotaDetail>> {
    return this.http.get<Array<MascotaDetail>>(this.apiUrl);
  }
}
