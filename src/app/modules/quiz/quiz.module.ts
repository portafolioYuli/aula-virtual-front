import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearQuizComponent } from './crear-quiz/crear-quiz.component';
import { ListadoQuicesComponent } from './listado-quices/listado-quices.component';
import { QuizRestService } from './quiz-rest.service';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QuizRoutingModule } from './quiz-routing.module';
import { MaterialModule } from '../../commons/modules/material.module';
import { CrearPreguntaComponent } from './crear-pregunta/crear-pregunta.component';
import { VerActividadComponent } from './ver-actividad/ver-actividad.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    QuizRoutingModule,
    MaterialModule,
    MatCardModule,
  ],
  declarations: [
    CrearQuizComponent,
    ListadoQuicesComponent,
    CrearPreguntaComponent,
    VerActividadComponent,
  ],
  exports: [CrearQuizComponent, ListadoQuicesComponent, VerActividadComponent],
  providers: [QuizRestService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class QuizModule {}
