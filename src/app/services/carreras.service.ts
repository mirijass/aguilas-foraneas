import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrera } from '../models/carrera';

@Injectable({
  providedIn: 'root'
})
export class CarrerasService {

  constructor(private http:HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  private urlAdmin = "http://localhost:4000/carreras/";

  getCarrera(idCarrera:number):Observable<Carrera>{
    return this.http.get<Carrera>(this.urlAdmin+idCarrera,this.httpOptions);
  }

  getCarreras():Observable<Carrera[]>{
    return this.http.get<Carrera[]>(this.urlAdmin,this.httpOptions);
  }

  createCarrera(carrera: Carrera):Observable<Carrera>{
    return this.http.post<Carrera>(this.urlAdmin, carrera, this.httpOptions);
  }
  
  editCarrera(idCarrera:number, carrera: Carrera):Observable<Carrera>{
    return this.http.put<Carrera>(this.urlAdmin+idCarrera, carrera, this.httpOptions);
  }

  deleteCarrera(idCarrera:number):Observable<Carrera>{
    return this.http.delete<Carrera>(this.urlAdmin+idCarrera+idCarrera, this.httpOptions);
  }

}
