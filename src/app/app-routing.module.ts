import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./commons/components/index/index.component";
import {PageNotFoundComponent} from "./commons/components/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'quices',
    pathMatch: 'full'
  },
  {
    path: 'quices',
    loadChildren: () => import(`./modules/quiz/quiz.module`).then( m => m.QuizModule )
  },
  {
    path: 'home',
    component: IndexComponent
  },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
