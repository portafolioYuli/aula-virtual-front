import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizInterface } from 'src/app/commons/interfaces/quiz.interface';
import { QuizRestService } from '../quiz-rest.service';
import { MatDialog } from '@angular/material/dialog';
import { MessageComponent } from 'src/app/commons/components/message/message.component';

const hoy = new Date();
interface Pregunta {
  textoPregunta: string;
  ponderacion: number;
}

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

  preguntas: Pregunta[] = [{ textoPregunta: '', ponderacion: 0 }];

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

  eliminarPregunta(position: number) {
    this.preguntas.splice(position, 1);
  }

  agregarPregunta() {
    let index = this.preguntas.length;
    let ultimaPregunta = this.preguntas[index - 1];

    if (this.preguntas.length == 0) {
      this.preguntas.push({ textoPregunta: '', ponderacion: 1 });
    } else if (
      this.preguntas[index - 1].textoPregunta == '' &&
      this.preguntas[index - 1].ponderacion === 0
    ) {
      alert('para agregar otra pregunta el campo debe estar diligenciado');
    } else {
      this.preguntas.push({ textoPregunta: '', ponderacion: 1 });
    }
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
