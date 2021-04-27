import { Injectable } from '@angular/core';
import {Alumno} from '../modelos/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  
  constructor() { }
  
  public ListadoAlumnos:Alumno[]=[
      {id:1,estado:"aprobado",promedio:8,carrera:"analista",activo:true,nombre:"Paula",apellido:"Romano",fecha:"01/02/1991",pais:{id:1,descripcion:"Argentina"}},
      {id:2,estado:"reprobado",promedio:7,carrera:"analista",activo:false,nombre:"Romina",apellido:"Nader",fecha:"05/04/1994",pais:{id:2,descripcion:"Brasil"}},
      {id:3,estado:"cursando",promedio:6,carrera:"infraestructura",activo:true,nombre:"Juan",apellido:"Lopez",fecha:"01/12/2003",pais:{id:1,descripcion:"Argentina"}},
      {id:4,estado:"reprobado",promedio:7,carrera:"infraestructura",activo:false,nombre:"Maria",apellido:"Rossi",fecha:"08/09/2000",pais:{id:1,descripcion:"Argentina"}},
      {id:5,estado:"cursando",promedio:5,carrera:"analista",activo:true,nombre:"Laura",apellido:"Alonso",fecha:"12/10/2000",pais:{id:4,descripcion:"Chile"}},
    ];
  
  MostrarTodos():Alumno[]{
    return this.ListadoAlumnos.slice();
  }

  BorrarAlumno(aluId:number):any{
    this.ListadoAlumnos.forEach((value,index)=>{
      if(value.id==aluId)
        this.ListadoAlumnos.splice(index,1);
    });
    return 0;
  }

  Buscar(aluId:number):Alumno{  
    aluId=+aluId;
    return this.ListadoAlumnos.find(x => x.id === aluId);  
  }

  BuscarPorApellido(apell:string):Alumno[]{
    return this.ListadoAlumnos.filter(x => x.apellido ==apell);  
  }

  Crear(alumno:Alumno){
    this.ListadoAlumnos.unshift(alumno);
  }

  Editar(alumno:Alumno){
    console.log("Modificar alumno: " + alumno.nombre + " " +alumno.apellido);
    //indexOf()
    var indice=this.ListadoAlumnos.findIndex(x => x.id === alumno.id); 
    this.ListadoAlumnos[indice]=alumno;
  }

  
 
}
