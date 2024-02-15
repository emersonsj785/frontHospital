import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sede } from '../models/sede';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SedeService {

  private baseEndpoint = 'http://localhost:8090/api/sedes';

  private cabeceras: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  public listar():Observable<Sede[]>{
    return this.http.get<Sede[]>(this.baseEndpoint);
  }
}
