import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoQuicesComponent } from './listado-quices/listado-quices.component';
import { CrearQuizComponent } from './crear-quiz/crear-quiz.component';
import { VerActividadComponent } from './ver-actividad/ver-actividad.component';

const routes: Routes = [
  { path: '', component: ListadoQuicesComponent },
  { path: 'crear', component: CrearQuizComponent },
  { path: 'ver', component: VerActividadComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizRoutingModule {}
