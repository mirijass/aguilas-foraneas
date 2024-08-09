import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from '../models/comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(private http:HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  private urlAdmin = "http://localhost:4000/comentarios/";

  getComentario(idComentario:number):Observable<Comentario>{
    return this.http.get<Comentario>(this.urlAdmin+idComentario,this.httpOptions);
  }

  getComentarios():Observable<Comentario[]>{
    return this.http.get<Comentario[]>(this.urlAdmin,this.httpOptions);
  }

  createComentario(comentario: Comentario):Observable<Comentario>{
    return this.http.post<Comentario>(this.urlAdmin, comentario, this.httpOptions);
  }
  
  editComentario(idComentario:number, comentario: Comentario):Observable<Comentario>{
    return this.http.put<Comentario>(this.urlAdmin+idComentario, comentario, this.httpOptions);
  }

  deleteComentario(idComentario:number):Observable<Comentario>{
    return this.http.delete<Comentario>(this.urlAdmin+idComentario+idComentario, this.httpOptions);
  }
}
