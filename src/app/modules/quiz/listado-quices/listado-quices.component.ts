import { Component, OnInit } from '@angular/core';
import { QuizRestService } from '../quiz-rest.service';
import { QuizInterface } from '../../../commons/interfaces/quiz.interface';
import { MatDialog } from '@angular/material/dialog';
import { CrearPreguntaComponent } from '../crear-pregunta/crear-pregunta.component';
import { VerActividadComponent } from '../ver-actividad/ver-actividad.component';

@Component({
  selector: 'app-listado-quices',
  templateUrl: './listado-quices.component.html',
  styleUrls: ['./listado-quices.component.css'],
})
export class ListadoQuicesComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'nombre',
    'fecha_apertura',
    'fecha_cierre',
    'duracion',
    'tipo',
    'opciones',
    'numPreguntas',
  ];
  quicesDataSource: QuizInterface[] = [];

  constructor(private service: QuizRestService, public dialog: MatDialog) {}

  ngOnInit() {
    this.service.listarQuices().subscribe((data: QuizInterface[]) => {
      this.quicesDataSource = data;
    });
  }

  verActividad(idActividad: number): void {
    this.dialog.open(VerActividadComponent, {
      minWidth: '57%',
      data: {
        idActividad: idActividad,
      },
    });
  }

  deleteActividad(idActividad: number): void {
    this.service
      .eliminarActividad(idActividad)
      .subscribe((data: QuizInterface[]) => {
        this.quicesDataSource = data;
        this.dialog.open(MessageComponent, {
          data: {
            mensaje: 'se ha eliminado con exito',
            tipo: 'success',
          },
        });
        this.ngOnInit();
      });
  }

  createPregunta(idActividad: number) {
    console.log(idActividad);
    this.dialog.open(CrearPreguntaComponent, {
      data: {
        idActividad: idActividad,
      },
    });
  }
}
