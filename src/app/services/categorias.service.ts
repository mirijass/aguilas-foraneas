import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../models/categorias';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http:HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  private urlAdmin = "http://localhost:4000/categorias/";

  getCategoria(idCategoria:number):Observable<Categoria>{
    return this.http.get<Categoria>(this.urlAdmin+idCategoria,this.httpOptions);
  }

  getCategorias():Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.urlAdmin,this.httpOptions);
  }

  createCategoria(categoria: Categoria):Observable<Categoria>{
    return this.http.post<Categoria>(this.urlAdmin, categoria, this.httpOptions);
  }
  
  editCategoria(idCategoria:number, categoria: Categoria):Observable<Categoria>{
    return this.http.put<Categoria>(this.urlAdmin+idCategoria, categoria, this.httpOptions);
  }

  deleteCategoria(idCategoria:number):Observable<Categoria>{
    return this.http.delete<Categoria>(this.urlAdmin+idCategoria+idCategoria, this.httpOptions);
  }

}
