import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../modelos/producto';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  constructor(private http:HttpClient) { }

  getAll():Observable<Categoria[]>{ 
    const headers={
      'Accept':'application/json',
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST, PUT, GET, DELETE',
    }
    return this.http.get<Categoria[]>("http://localhost:5000/api/categorias/")
  }
}
