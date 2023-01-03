import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {
  QuizInterface,
  preguntaInterface,
} from '../../commons/interfaces/quiz.interface';

@Injectable({
  providedIn: 'root',
})
export class QuizRestService {
  constructor(private http: HttpClient) {}

  listarQuices(): Observable<any> {
    return this.http.get(`${environment.backendUrl}/actividad`);
  }

  guardarQuiz(quiz: QuizInterface): Observable<any> {
    return this.http.post(`${environment.backendUrl}/actividad`, quiz);
  }

  eliminarActividad(id: number): Observable<any> {
    return this.http.delete(`${environment.backendUrl}/actividad/${id}`);
  }

  guardarPregunta(
    idActividad: number,
    preguntas: preguntaInterface
  ): Observable<any> {
    console.log(idActividad);
    return this.http.post(
      `${environment.backendUrl}/actividad/${idActividad}/pregunta`,
      preguntas
    );
  }
}
