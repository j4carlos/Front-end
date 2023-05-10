import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { EditProyectosComponent } from './components/proyectos/edit-proyectos.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'nuevoproyecto',component:NewProyectoComponent},
  {path:'nuevaedu',component:NewEducacionComponent},
  {path:'nuevaexp',component:NewExperienciaComponent},
  {path:'editedu/:id',component:EditEducacionComponent},
  {path:'editexp/:id',component:EditExperienciaComponent},
  {path:'editproyec/:id',component:EditProyectosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
