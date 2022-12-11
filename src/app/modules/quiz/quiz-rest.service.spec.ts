/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QuizRestService } from './quiz-rest.service';

describe('Service: QuizRest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuizRestService]
    });
  });

  it('should ...', inject([QuizRestService], (service: QuizRestService) => {
    expect(service).toBeTruthy();
  }));
});
