import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment"
import { Observable } from 'rxjs';
import { Veterinario } from './veterinario';
import { VeterinarioDetail } from './veterinarioDetail';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {

private apiUrl: string = environment.baseUrl + 'veterinarios';
constructor( private http: HttpClient) { }

getVeterinarios(): Observable<VeterinarioDetail[]>{
  return this.http.get<VeterinarioDetail[]>(this.apiUrl);
}

getVeterinarioDetail(vetId): Observable<VeterinarioDetail> {
  return this.http.get<VeterinarioDetail>(`${this.apiUrl}/${vetId}`);
}
}
