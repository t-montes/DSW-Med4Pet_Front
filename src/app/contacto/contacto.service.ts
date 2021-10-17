import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contacto } from './contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private apiUrl: string = environment.baseUrl + 'contactos';
  constructor(private http: HttpClient) { }
  getContactos(): Observable<Contacto[]>{
    return this.http.get<Contacto[]>(this.apiUrl);
  }


}
