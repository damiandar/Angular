import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {
 
  ListadoProfesores=[
    {Legajo:121313, Nombre:"Juan", Apellido:"Soler"},
    {Legajo:842837, Nombre:"Martina", Apellido:"Lopez"},
    {Legajo:121313, Nombre:"Daniela", Apellido:"Uriburu"},
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
