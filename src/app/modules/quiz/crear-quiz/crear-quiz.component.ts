import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizInterface } from 'src/app/commons/interfaces/quiz.interface';
import { QuizRestService } from '../quiz-rest.service';
import { MatDialog } from '@angular/material/dialog';
import { MessageComponent } from 'src/app/commons/components/message/message.component';

const hoy = new Date();

@Component({
  selector: 'app-crear-quiz',
  templateUrl: './crear-quiz.component.html',
  styleUrls: ['./crear-quiz.component.css'],
})
export class CrearQuizComponent implements OnInit {
  pregunta: any;

  quizForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    start: new FormControl('', [Validators.required]),
    end: new FormControl('', [Validators.required]),
    duracion: new FormControl(20, [Validators.required]),
    tipo: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
  });

  constructor(
    private restService: QuizRestService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {}

  onEnviar() {
    console.log('Estoy enviando el form');
    let quiz: QuizInterface = <QuizInterface>{
      nombre: this.quizForm.value.nombre!,
      fecha_apertura: this.quizForm.value.start!,
      fecha_cierre: this.quizForm.value.end!,
      duracion: this.quizForm.value.duracion!,
      tipo: this.quizForm.value.tipo!,
      descripcion: this.quizForm.value.descripcion!,
      preguntas: <any>[],
    };
    console.log(quiz);
    // consume el api rest
    this.restService.guardarQuiz(quiz).subscribe((data) => {
      console.log(data);
      if (data) {
        this.openDialogOk();
      } else {
        this.openDialogError();
      }
      this.quizForm.reset();
      this.router.navigate(['quices']);
    });
  }

  onCancelar() {
    this.quizForm.reset();
  }

  openDialogOk() {
    this.dialog.open(MessageComponent, {
      data: {
        mensaje: 'se guargo con exito',
        tipo: 'success',
      },
    });
  }
  openDialogError() {
    this.dialog.open(MessageComponent, {
      data: {
        mensaje: 'Hubo un error guardando la actividad',
        tipo: 'error',
      },
    });
  }
}
function explode(arg0: string, fecha: any) {
  throw new Error('Function not implemented.');
}
