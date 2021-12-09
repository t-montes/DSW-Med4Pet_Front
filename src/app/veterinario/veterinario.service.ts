import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment"
import { Observable } from 'rxjs';
import { Veterinario } from './veterinario';
import { VeterinarioDetail } from './veterinarioDetail';
import { RegistroMedico } from '../registroMedico/registroMedico';
import { Servicio } from '../servicio/servicio';
import { Contacto } from '../contacto/contacto';

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

createVeterinario(veterinario:Veterinario): Observable<VeterinarioDetail>{
  return this.http.post<VeterinarioDetail>(this.apiUrl, veterinario);
}

createRegistroMedicoVeterinario(veterinarioId:number, registroMedicoId:number): Observable<RegistroMedico> {
  return this.http.post<RegistroMedico>(environment.baseUrl+`veterinarios/${veterinarioId}/registrosMedicos/${registroMedicoId}`, undefined);
}

createContactoVeterinario(veterinarioId:number, contactoId:number): Observable<Contacto> {
  return this.http.post<Contacto>(environment.baseUrl+`veterinarios/${veterinarioId}/contactos/${contactoId}`, undefined);
}

createServicioVeterinario(veterinarioId:number, servicioId:number): Observable<Servicio> {
  return this.http.post<Servicio>(environment.baseUrl+`veterinarios/${veterinarioId}/servicios/${servicioId}`, undefined);
}

}
