import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegistroMedico} from './registroMedico'
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistroMedicoService {
  private apiUrl:string = environment.baseUrl + 'registrosMedicos';
  constructor(private http: HttpClient) { }
  getRegistrosMedicos(): Observable<RegistroMedico[]> {
    return this.http.get<RegistroMedico[]>(this.apiUrl);
  }
}
