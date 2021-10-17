import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pse } from './pse';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PseService {
private apiUrl: string = environment.baseUrl + 'pses';
constructor(private http: HttpClient) { }

getPses(): Observable<Pse[]>{
  return this.http.get<Pse[]>(this.apiUrl);
}

}
