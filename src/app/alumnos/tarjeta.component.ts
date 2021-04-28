import { Component, Input,Output, OnInit, EventEmitter } from '@angular/core';
import { Alumno } from '../modelos/alumno';


@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  @Input() itemAlumno:Alumno;
  @Output () borrarAlumno: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  borrar(id: number){
    this.borrarAlumno.emit(id);
  }

}
