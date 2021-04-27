import { Component, OnInit } from '@angular/core';
import { Alumno} from '../modelos/alumno';
import {AlumnoService} from '../servicios/alumno.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  
  public ListadoAlumnos:Alumno[];
  public UnAlumno:Alumno;
  public campobuscado:string;
  public mensajeingreso:string="Ingrese los datos a buscar";
  constructor(private servicioAlumno:AlumnoService) { }

  ngOnInit() { 
    this.ListadoAlumnos=this.servicioAlumno.MostrarTodos();
  }

  Borrar(alumnoId:number){
    this.servicioAlumno.BorrarAlumno(alumnoId);
    this.ListadoAlumnos=this.servicioAlumno.MostrarTodos();
  }

  verificarSiEstaActivo(alumnoId:number){
    var alumno:Alumno;
    alumno=this.servicioAlumno.Buscar(alumnoId);
    if(alumno.activo){
      alert("El alumno esta activo");
    }
    else{
      alert("Esta inactivo");
    }
  }

  BuscarAlumno(){
   this.ListadoAlumnos= this.servicioAlumno.BuscarPorApellido(this.campobuscado);
  }

}
