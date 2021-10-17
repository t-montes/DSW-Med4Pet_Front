import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TarjetaCredito } from './tarjetaCredito';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TarjetaCreditoService {
  private apiUrl: string = environment.baseUrl + 'tarjetas';

  constructor(private http: HttpClient) { }
  getTarjetas(): Observable<TarjetaCredito[]>{
    return this.http.get<TarjetaCredito[]>(this.apiUrl);
  }
}
