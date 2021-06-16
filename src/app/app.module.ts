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
import { ProfesoresFormComponent} from './profesores/profesores-form.component';
import { FormularioAlumnoComponent } from './alumnos/formulario-alumno/formulario-alumno.component';
import { GrillaComponent } from './alumnos/grilla.component';
import { TarjetaComponent } from './alumnos/tarjeta.component';
//agrego linea para ejecutarlo desde mi pc
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ListadoComponent } from './productos/listado.component';
import { FormularioComponent } from './productos/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AlumnosComponent,
    ProfesoresComponent,
    ProfesoresFormComponent,
    FormularioAlumnoComponent,
    GrillaComponent,
    TarjetaComponent,
    ListadoComponent,
    FormularioComponent
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
      { path: 'alumnos-grilla',component:GrillaComponent},
      { path: 'productos-listado',component:ListadoComponent},
      { path: 'producto-nuevo',component:FormularioComponent},
      { path: 'producto-editar/:id',component:FormularioComponent}
    ])
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
