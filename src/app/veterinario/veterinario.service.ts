import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment"
import { Observable } from 'rxjs';
import { Veterinario } from './veterinario';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {

private apiUrl: string = environment.baseUrl + 'veterinarios';
constructor( private http: HttpClient) { }

getVeterinarios(): Observable<Veterinario[]>{
  return this.http.get<Veterinario[]>(this.apiUrl);
}
}
