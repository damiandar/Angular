import { Component, OnInit } from '@angular/core';
import { Alumno} from '../modelos/alumno';
import {AlumnoService} from '../servicios/alumno.service';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {
  public ListadoAlumnos:Alumno[];
  seleccionado: number;
  constructor(private servicioAlumno:AlumnoService) { }

  recibirRespuesta(id:number){
    this.seleccionado=id;
  }

  ngOnInit() {
    this.ListadoAlumnos=this.servicioAlumno.MostrarTodos();
  }

}
