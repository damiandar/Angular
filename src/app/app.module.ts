import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { FormularioAlumnoComponent } from './alumnos/formulario-alumno/formulario-alumno.component';
import { GrillaComponent } from './alumnos/grilla.component';
import { TarjetaComponent } from './alumnos/tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AlumnosComponent,
    ProfesoresComponent,
    FormularioAlumnoComponent,
    GrillaComponent,
    TarjetaComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'alumnos', component: AlumnosComponent},
      { path: 'profesores', component: ProfesoresComponent},
      { path: 'alumno-nuevo',component:FormularioAlumnoComponent},
      { path: 'alumno-editar/:id',component:FormularioAlumnoComponent},
      { path: 'alumnos-grilla',component:GrillaComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
