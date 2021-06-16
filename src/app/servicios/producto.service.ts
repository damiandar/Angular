import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../modelos/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Producto[]>{
    console.log("servicios");
    const headers={
      'Accept':'application/json',
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST, PUT, GET, DELETE',
    }
    return this.http.get<Producto[]>("http://localhost:5000/api/productos/")
  }
  Buscar(prodId:number):Observable<Producto>{  
    prodId=+prodId;
    return this.http.get<Producto>("http://localhost:5000/api/productos/" + prodId );
  }
  Crear(prod: any): Observable<boolean>{
    const headers={
      'Accept':'application/json',
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'http://localhost:5000',
      'Access-Control-Allow-Methods': 'POST, PUT, GET, DELETE',
    }
    return this.http.post<boolean>("http://localhost:5000/api/productos/",prod,{headers});
  }

  Actualizar(prod:any):Observable<boolean>
  {
    prod.id= +prod.id;
    return this.http.put<boolean>("http://localhost:5000/api/productos/" , prod );
  }
  Borrar(prodId:number):Observable<Producto>{  
    prodId=+prodId;
    return this.http.delete<Producto>("http://localhost:5000/api/productos/" + prodId );
  }
  BuscarPorNombre(nombre:string):Observable<Producto[]>{  
      return this.http.get<Producto[]>("http://localhost:5000/api/productos/busquedanombre?nombrebuscado=" + nombre );
  }
}
