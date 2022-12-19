import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuizInterface } from './commons/interfaces/quiz.interface';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http: HttpClient) {}

  guardarQuiz(quizObject: QuizInterface): Observable<any> {
    return this.http.post('http://localhost:300/activad', quizObject);
  }
}
