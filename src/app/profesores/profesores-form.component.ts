import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Profesor} from '../modelos/profesor';
import {ProfesorService} from '../servicios/profesor.service';

@Component({
  selector: 'app-profesores-form',
  templateUrl: './profesores-form.component.html',
  styleUrls: ['./profesores-form.component.css']
})
export class ProfesoresFormComponent implements OnInit {
  formProfesor: FormGroup;

  constructor(private ProfesorServ: ProfesorService,
              private fb:FormBuilder) { }

  ngOnInit() {
    this.formProfesor=this.fb.group(
      {
        legajo:['',[ Validators.min(11110), Validators.max(99999) ]],
        nombre:['',  [Validators.required,Validators.minLength(3), Validators.maxLength(8)]   ],
        apellido:'',
        mail:['',[Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$") ] ],
      }
    );
  }

  GuardarProfesor(){
    let profesor: Profesor= Object.assign({}, this.formProfesor.value);
    console.log(profesor.nombre);
  }

}
