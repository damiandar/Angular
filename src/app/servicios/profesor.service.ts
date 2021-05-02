import { Injectable } from '@angular/core';
import {Profesor} from '../modelos/profesor'

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  ListadoProfesores:Profesor[]=[
    {legajo:121313, nombre:"Juan", apellido:"Soler", mail:"juansoler@gmail.com"},
    {legajo:842837, nombre:"Martina", apellido:"Lopez", mail:"lopez@gmail.com"},
    {legajo:121313, nombre:"Daniela", apellido:"Uriburu",mail:"daniela@gmail.com"},
    
  ]
  constructor() { }

  MostrarTodos():Profesor[]{
    return this.ListadoProfesores.slice();
  }
  
  BorrarProfesor(profId:number):any{

  }

  Crear(profesor:Profesor){

  }
  Editar(profesor:Profesor){

  }
}
