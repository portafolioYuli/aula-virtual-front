import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearQuizComponent } from './crear-quiz/crear-quiz.component';
import { ListadoQuicesComponent } from './listado-quices/listado-quices.component';
import { QuizRestService } from './quiz-rest.service';

@NgModule({
  imports: [CommonModule],
  declarations: [CrearQuizComponent, ListadoQuicesComponent],
  exports: [CrearQuizComponent, ListadoQuicesComponent],
  providers: [QuizRestService],
})
export class QuizModule {}
