import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { preguntaInterface } from 'src/app/commons/interfaces/quiz.interface';
import { MessageComponent } from 'src/app/commons/components/message/message.component';
import { QuizRestService } from '../quiz-rest.service';
import { Router } from '@angular/router';

interface Pregunta {
  textoPregunta: string;
  ponderacion: number;
}

@Component({
  selector: 'app-crear-pregunta',
  templateUrl: './crear-pregunta.component.html',
  styleUrls: ['./crear-pregunta.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrearPreguntaComponent implements OnInit {
  preguntaForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    ponderacion: new FormControl(0, [Validators.required]),
  });

  preguntas: Pregunta[] = [{ textoPregunta: '', ponderacion: 0 }];

  idActividad: number;
  constructor(
    private restService: QuizRestService,
    public dialog: MatDialog,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
    this.idActividad = data.idActividad;
  }

  ngOnInit() {}

  onEnviar() {
    console.log('Estoy enviando el form');
    let pregunta: preguntaInterface = <preguntaInterface>{
      nombre: this.preguntaForm.value.nombre!,
      ponderacion: this.preguntaForm.value.ponderacion!,
      idUsuario: 1,
    };
    console.log(pregunta);
    console.log(this.idActividad);
    // consume el api rest
    this.restService
      .guardarPregunta(this.idActividad, pregunta)
      .subscribe((data) => {
        console.log(data);
        if (data) {
          this.createPregunta();
        } else {
          this.openDialogError();
        }
        this.preguntaForm.reset();
        this.router.navigate(['']);
      });
  }

  onCancelar() {
    this.preguntaForm.reset();
  }

  eliminarPregunta(position: number) {
    this.preguntas.splice(position, 1);
  }

  agregarPregunta() {
    //let index = this.preguntas.length;
    //let ultimaPregunta = this.preguntas[index - 1];

    if (this.preguntas.length === 0) {
      this.preguntas.push({ textoPregunta: '', ponderacion: 0 });
    }

    //console.log(ultimaPregunta);
    /*if (
      ultimaPregunta.textoPregunta == '' ||
      ultimaPregunta.ponderacion === 0
    ) {
      alert('para agregar otra pregunta el campo debe estar diligenciado');
    }*/
    else {
      this.preguntas.push({ textoPregunta: '', ponderacion: 0 });
    }
  }

  createPregunta() {
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