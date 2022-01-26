import { Sheet1Ex1Component } from './exercice/sheet1Ex1/sheet1Ex1.component';
import { ProfilComponent } from './profil/profil.component';
import { ExerciceComponent } from './exercice/exercice.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '' , component: ProfilComponent },
  {path: 'exercice' , component: ExerciceComponent,  children :[
    {path: 'sheet1Ex1' , component: Sheet1Ex1Component }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
