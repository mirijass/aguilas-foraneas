import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lugares } from '../models/lugar';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {

  constructor(private http:HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  private urlAdmin = "http://localhost:4000/lugares/";

  getLugar(idLugar:number):Observable<Lugares>{
    return this.http.get<Lugares>(this.urlAdmin+idLugar,this.httpOptions);
  }

  getLugaresEntretenimiento():Observable<Lugares[]>{
    return this.http.get<Lugares[]>(this.urlAdmin+'get/entretenimiento',this.httpOptions);
  }
  getLugaresComida():Observable<Lugares[]>{
    return this.http.get<Lugares[]>(this.urlAdmin+'get/comida',this.httpOptions);
  }
  getLugaresRenta():Observable<Lugares[]>{
    return this.http.get<Lugares[]>(this.urlAdmin+'get/renta',this.httpOptions);
  }
  getLugaresTransporte():Observable<Lugares[]>{
    return this.http.get<Lugares[]>(this.urlAdmin+'get/trasporte',this.httpOptions);
  }

  createLugare(lugar: Lugares):Observable<Lugares>{
    return this.http.post<Lugares>(this.urlAdmin, lugar, this.httpOptions);
  }
  
  editLugare(idLugar:number, lugar: Lugares):Observable<Lugares>{
    return this.http.put<Lugares>(this.urlAdmin+idLugar, lugar, this.httpOptions);
  }

  deleteLugare(idLugar:number):Observable<Lugares>{
    return this.http.delete<Lugares>(this.urlAdmin+idLugar+idLugar, this.httpOptions);
  }
}
