import { Component, OnInit } from '@angular/core';
import {Profesor} from '../modelos/profesor';
import {ProfesorService} from '../servicios/profesor.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {
 ListadoProfesores:Profesor[];
 Titulo:string="Listado de profesores";
 ingreso:string="ingresar texto en este input";
 textoingresado:string;
 
  constructor(private servicioProfesor:ProfesorService) { }

  ngOnInit() {
    this.ListadoProfesores=this.servicioProfesor.MostrarTodos();
  }

  MostrarMensaje(){
    alert("Mensaje del boton");
  }

}
