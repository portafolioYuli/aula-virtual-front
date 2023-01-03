import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuizModule } from './modules/quiz/quiz.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { IndexComponent } from './commons/components/index/index.component';
import { PageNotFoundComponent } from './commons/components/page-not-found/page-not-found.component';
import { MaterialModule } from './commons/modules/material.module';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './commons/components/message/message.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PageNotFoundComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    QuizModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    CommonModule,
    ScrollingModule,
  ],
  providers: [HttpClient],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
