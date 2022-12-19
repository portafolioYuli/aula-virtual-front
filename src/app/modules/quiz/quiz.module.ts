import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearQuizComponent } from './crear-quiz/crear-quiz.component';
import { ListadoQuicesComponent } from './listado-quices/listado-quices.component';
import { QuizRestService } from './quiz-rest.service';
import {QuizRoutingModule} from "./quiz-routing.module";
import {MaterialModule} from "../../commons/modules/material.module";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [CommonModule,QuizRoutingModule,MaterialModule,HttpClientModule,MatButtonModule],
  declarations: [CrearQuizComponent, ListadoQuicesComponent],
  exports: [CrearQuizComponent, ListadoQuicesComponent],
  providers: [QuizRestService],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class QuizModule {}
