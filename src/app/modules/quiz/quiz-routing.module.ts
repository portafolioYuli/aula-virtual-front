import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListadoQuicesComponent} from "./listado-quices/listado-quices.component";
import {CrearQuizComponent} from "./crear-quiz/crear-quiz.component";


const routes: Routes = [
  { path: '', component: ListadoQuicesComponent },
  { path: 'crear', component: CrearQuizComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
