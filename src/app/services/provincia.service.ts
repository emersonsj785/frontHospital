import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Provincia } from '../models/provincia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  private baseEndpoint = 'http://localhost:8090/api/provincias';

  private cabeceras: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  public listar(): Observable<Provincia[]>{
    return this.http.get<Provincia[]>(this.baseEndpoint);
  }

  public ver(idProvincia: number): Observable<Provincia>{
    return this.http.get<Provincia>(`${this.baseEndpoint}/${idProvincia}`);
  }

  public crear(provincia: Provincia): Observable<Provincia>{
    return this.http.post<Provincia>(this.baseEndpoint, provincia, { headers: this.cabeceras});
  }

  public editar(provincia: Provincia): Observable<Provincia>{
    return this.http.put<Provincia>(`${this.baseEndpoint}/${provincia.idProvincia}`,
    provincia,
    {headers : this.cabeceras});
  }

  public eliminar(idProvincia: number): Observable<void>{
    return this.http.delete<void>(`${this.baseEndpoint}/${idProvincia}`);
  }
  
}
