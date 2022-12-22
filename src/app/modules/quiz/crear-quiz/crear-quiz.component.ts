import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizInterface } from 'src/app/commons/interfaces/quiz.interface';
import { RestService } from 'src/app/rest.service';

const hoy = new Date();
const month = hoy.getMonth();
const year = hoy.getFullYear();

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
    duracion: new FormControl(0, [Validators.required]),
  });

  preguntas: Pregunta[] = [{ textoPregunta: '', ponderacion: 1 }];

  constructor(private restService: RestService, private router: Router) {}

  ngOnInit() {}

  onEnviar() {
    console.log('Estoy enviando el form');
    let quiz: QuizInterface = <QuizInterface>{
      nombre: this.quizForm.value.nombre!,
      fecha_apertura: this.quizForm.value.start!,
      fecha_cierre: this.quizForm.value.end!,
      duracion: this.quizForm.value.duracion!,
    };

    console.log(quiz);
    // consume el api rest
    this.restService.guardarQuiz(quiz).subscribe((data) => {
      console.log(data);
    });
  }

  onCancelar() {
    this.quizForm.reset();
  }

  eliminarPregunta(position: number) {
    this.preguntas.splice(position, 1);
  }

  agregarPregunta() {
    this.preguntas.push({ textoPregunta: ' ', ponderacion: 0 });
  }
}
function explode(arg0: string, fecha: any) {
  throw new Error('Function not implemented.');
}
