import { ProfilComponent } from './profil/profil.component';
import { ExerciceComponent } from './exercice/exercice.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '' , component: ProfilComponent },
  {path: 'exercice' , component: ExerciceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
