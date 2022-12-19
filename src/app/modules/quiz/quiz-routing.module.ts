import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListadoQuicesComponent} from "./listado-quices/listado-quices.component";


const routes: Routes = [{ path: '', component: ListadoQuicesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
