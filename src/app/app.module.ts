import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuizModule } from './modules/quiz/quiz.module';
import { PruebaModule } from './modules/prueba/prueba.module';
import { IndexComponent } from './commons/components/index/index.component';
import { PageNotFoundComponent } from './commons/components/page-not-found/page-not-found.component';
import {MaterialModule} from "./commons/modules/material.module";

@NgModule({
  declarations: [AppComponent, IndexComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    QuizModule,
    PruebaModule,
    MaterialModule
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
