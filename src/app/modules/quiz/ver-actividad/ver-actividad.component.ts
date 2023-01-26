import { Component, Inject, OnInit } from '@angular/core';
import { QuizInterface } from 'src/app/commons/interfaces/quiz.interface';
import { QuizRestService } from '../quiz-rest.service';
import { PreguntaInterface } from 'src/app/commons/interfaces/quiz.interface';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ver-actividad',
  templateUrl: './ver-actividad.component.html',
  styleUrls: ['./ver-actividad.component.css'],
})
export class VerActividadComponent implements OnInit {
  displayPreguntas: string[] = ['nombre', 'ponderacion'];
  quizActual: QuizInterface | undefined;

  preguntasDataSource: PreguntaInterface[] = [];
  idActividad: number = 0;
  constructor(
    private service: QuizRestService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog
  ) {
    this.idActividad = data.idActividad;
  }

  ngOnInit() {
    this.viewActividad();
  }

  viewActividad(): void {
    this.service
      .verActividad(this.idActividad)
      .subscribe((data: QuizInterface) => {
        console.log(data);
        this.quizActual = data;
        this.preguntasDataSource = data.preguntas;

        console.table(this.preguntasDataSource);
      });
  }
  ok(): void {
    this.dialog.closeAll();
  }
}
