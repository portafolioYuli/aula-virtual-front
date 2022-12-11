import { Component, OnInit } from '@angular/core';
import { QuizRestService } from '../quiz-rest.service';

@Component({
  selector: 'app-listado-quices',
  templateUrl: './listado-quices.component.html',
  styleUrls: ['./listado-quices.component.css'],
})
export class ListadoQuicesComponent implements OnInit {
  constructor(private service: QuizRestService) {}

  ngOnInit() {
    this.service.listarQuices();
  }
}
