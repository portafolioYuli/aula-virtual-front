import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuizModule } from './modules/quiz/quiz.module';
import { PruebaModule } from './modules/prueba/prueba.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    QuizModule,
    PruebaModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
