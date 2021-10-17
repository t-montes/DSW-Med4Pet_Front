import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmpresaConvenio } from './empresaConvenio'
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class EmpresaConvenioService {

private apiUrl:string = environment.baseUrl + 'EmpresaConvenio';
constructor(private http: HttpClient) { }

getEmpresaConvenio(): Observable<EmpresaConvenio[]> {
  return this.http.get<EmpresaConvenio[]>(this.apiUrl);
}
}
