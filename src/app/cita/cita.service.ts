import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CitaDetail } from './citaDetail';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private apiUrl:string = environment.baseUrl + 'citas';
  constructor(private http: HttpClient) { }
  getCitas(): Observable<CitaDetail[]> {
    return this.http.get<CitaDetail[]>(this.apiUrl);
  }

}
