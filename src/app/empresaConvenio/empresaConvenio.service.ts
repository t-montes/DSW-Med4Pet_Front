import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmpresaConvenio } from './empresaConvenio'
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs'
import { Contacto } from '../contacto/contacto';

@Injectable({
  providedIn: 'root'
})
export class EmpresaConvenioService {

private apiUrl:string = environment.baseUrl + 'empresasConvenio';
constructor(private http: HttpClient) { }

getEmpresaConvenio(): Observable<EmpresaConvenio[]> {
  return this.http.get<EmpresaConvenio[]>(this.apiUrl);
}

createEmpresaConvenio(empresaConvenio: EmpresaConvenio): Observable<EmpresaConvenio> {
  return this.http.post<EmpresaConvenio>(this.apiUrl, empresaConvenio);
}

createContactoEmpresaConvenio(empresaConvenioId:number, contactoId:number): Observable<Contacto> {
  return this.http.post<Contacto>(environment.baseUrl+`empresasConvenio/${empresaConvenioId}/contactos/${contactoId}`, undefined);
}

}
