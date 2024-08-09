import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  private urlAdmin = "http://localhost:4000/usuarios/";

  getUsuario(idUsuario:number):Observable<Usuario>{
    return this.http.get<Usuario>(this.urlAdmin+idUsuario,this.httpOptions);
  }

  getUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.urlAdmin,this.httpOptions);
  }

  createUsuario(usuario: Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.urlAdmin, usuario, this.httpOptions);
  }
  
  editUsuario(idUsuario:number, usuario: Usuario):Observable<Usuario>{
    return this.http.put<Usuario>(this.urlAdmin+idUsuario, usuario, this.httpOptions);
  }

  deleteUsuario(idUsuario:number):Observable<Usuario>{
    return this.http.delete<Usuario>(this.urlAdmin+idUsuario+idUsuario, this.httpOptions);
  }
}
