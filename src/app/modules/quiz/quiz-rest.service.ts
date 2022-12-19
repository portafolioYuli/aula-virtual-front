import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {QuizInterface} from "../../commons/interfaces/quiz.interface";

@Injectable({
  providedIn: 'root',
})
export class QuizRestService {
  constructor(private http:HttpClient) {}

  listarQuices(): Observable<any> {
    return this.http.get(`${environment.backendUrl}/actividad`);
  }

  guardarQuiz(quiz:QuizInterface):Observable<any>{
    return this.http.post(`${environment.backendUrl}/actividad`,quiz);
  }
}
