import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../modelos/producto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  public rutaApi:string=environment.apiUrl + "productos/";
  constructor(private http:HttpClient) { }

  getAll():Observable<Producto[]>{
    console.log("servicios");
    const headers={
      'Accept':'application/json',
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST, PUT, GET, DELETE',
    }
    return this.http.get<Producto[]>(this.rutaApi)
  }
  Buscar(prodId:number):Observable<Producto>{  
    prodId=+prodId;
    return this.http.get<Producto>(this.rutaApi + prodId );
  }
  Crear(prod: any): Observable<boolean>{
    const headers={
      'Accept':'application/json',
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'http://localhost:5000',
      'Access-Control-Allow-Methods': 'POST, PUT, GET, DELETE',
    }
    return this.http.post<boolean>(this.rutaApi,prod,{headers});
  }

  Actualizar(prod:any):Observable<boolean>
  {
    prod.id= +prod.id;
    return this.http.put<boolean>(this.rutaApi , prod );
  }
  Borrar(prodId:number):Observable<Producto>{  
    prodId=+prodId;
    return this.http.delete<Producto>(this.rutaApi + prodId );
  }
  BuscarPorNombre(nombre:string):Observable<Producto[]>{  
      return this.http.get<Producto[]>( this.rutaApi + "busquedanombre?nombrebuscado=" + nombre );
  }
}
