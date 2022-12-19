import { Component, OnInit } from '@angular/core';
import { QuizRestService } from '../quiz-rest.service';
import {QuizInterface} from "../../../commons/interfaces/quiz.interface";

@Component({
  selector: 'app-listado-quices',
  templateUrl: './listado-quices.component.html',
  styleUrls: ['./listado-quices.component.css'],
})
export class ListadoQuicesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'fecha_apertura', 'fecha_cierre','opciones'];
  quicesDataSource:QuizInterface[] = [];

  constructor(private service: QuizRestService) {}

  ngOnInit() {
    this.service.listarQuices().subscribe((data:QuizInterface []) => {
        this.quicesDataSource=data;
    });
  }
}



