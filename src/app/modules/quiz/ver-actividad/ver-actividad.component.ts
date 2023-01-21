import { Component, Inject, OnInit } from '@angular/core';
import { QuizInterface } from 'src/app/commons/interfaces/quiz.interface';
import { QuizRestService } from '../quiz-rest.service';
import { UsuarioUsuario } from '../../../commons/interfaces/quiz.interface';
import { PreguntaInterface } from 'src/app/commons/interfaces/quiz.interface';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ver-actividad',
  templateUrl: './ver-actividad.component.html',
  styleUrls: ['./ver-actividad.component.css'],
})
export class VerActividadComponent implements OnInit {
  displayUsuario: string[] = [
    'id',
    'nombre',
    'apellido',
    'correo',
    'fecha_ingreso',
    'activo',
  ];

  displayedColumns: string[] = [
    'id',
    'nombre',
    'fecha_apertura',
    'fecha_cierre',
    'duracion',
    'tipo',
  ];

  displayPreguntas: string[] = ['nombre', 'ponderacion', 'idUsiario'];
  quizActual: QuizInterface | undefined;

  quicesDataSource: QuizInterface[] = [];
  preguntaDataSource: PreguntaInterface[] = [];
  usuarioDataSource: UsuarioUsuario[] = [];
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
        //console.log(data);
        this.quizActual = data;
        this.quicesDataSource = [data];

        //console.table(this.quicesDataSource);
      });
  }
  ok(): void {
    this.dialog.closeAll();
  }
}
