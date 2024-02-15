import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hospitales } from '../models/hospitales';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  private baseEndpoint = 'http://localhost:8090/api/hospitales';
  //private baseEndpoint = 'http://localhost:8090/api/hospitales/filtrado';
  //private baseEndpointCrear = 'http://localhost:8090/api/hospitales/registrar';

  private cabeceras: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  public listarHospitales(tipo: number, id: number): Observable<Hospitales[]> {
    const filtro = { tipo, id };
    return this.http.post<Hospitales[]>(`${this.baseEndpoint}/filtrado`, filtro, { headers: this.cabeceras });
  }

  public crear(hospital: Hospitales): Observable<Hospitales>{
    return this.http.post<Hospitales>(`${this.baseEndpoint}/registrar`, hospital, { headers: this.cabeceras});
  }

  public ver(id: number): Observable<Hospitales[]> {
    const filtro = { id };
    return this.http.post<Hospitales[]>(`${this.baseEndpoint}/ver`, filtro, { headers: this.cabeceras });
  }
  
  public actualizar(id: number, hospital: Hospitales): Observable<any> {
    return this.http.put<any>(`${this.baseEndpoint}/${id}`, hospital, { headers: this.cabeceras });
  }

  eliminar(idHospital: number): Observable<string> {
    return this.http.delete<string>(`${this.baseEndpoint}/${idHospital}`);
  }
}
