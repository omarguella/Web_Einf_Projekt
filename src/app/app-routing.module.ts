import { AboutMeComponent } from './exercice/aboutMe/aboutMe.component';
import { Ex33Component } from './exercice/Ex33/Ex33.component';
import { Ex65Component } from './exercice/Ex65/Ex65.component';
import { Ex113Component } from './exercice/Ex113/Ex113.component';
import { Ex112Component } from './exercice/Ex112/Ex112.component';
import { Ex111Component } from './exercice/Ex111/Ex111.component';
import { Ex103Component } from './exercice/Ex103/Ex103.component';
import { Ex102Component } from './exercice/Ex102/Ex102.component';
import { Ex101Component } from './exercice/Ex101/Ex101.component';
import { Ex92Component } from './exercice/Ex92/Ex92.component';
import { Ex91Component } from './exercice/Ex91/Ex91.component';
import { Ex82Component } from './exercice/Ex82/Ex82.component';
import { Ex81Component } from './exercice/Ex81/Ex81.component';
import { Ex72Component } from './exercice/Ex72/Ex72.component';
import { Ex71Component } from './exercice/Ex71/Ex71.component';
import { Ex64Component } from './exercice/Ex64/Ex64.component';
import { Ex63Component } from './exercice/Ex63/Ex63.component';
import { Ex62Component } from './exercice/Ex62/Ex62.component';
import { Ex61Component } from './exercice/Ex61/Ex61.component';
import { Ex53Component } from './exercice/Ex53/Ex53.component';
import { Ex52Component } from './exercice/Ex52/Ex52.component';
import { Ex51Component } from './exercice/Ex51/Ex51.component';
import { Ex44Component } from './exercice/Ex44/Ex44.component';
import { Ex43Component } from './exercice/Ex43/Ex43.component';
import { Ex42Component } from './exercice/Ex42/Ex42.component';
import { Ex41Component } from './exercice/Ex41/Ex41.component';
import { Ex32Component } from './exercice/Ex32/Ex32.component';
import { Ex31Component } from './exercice/Ex31/Ex31.component';
import { Ex23Component } from './exercice/Ex23/Ex23.component';
import { Ex22Component } from './exercice/Ex22/Ex22.component';
import { Ex21Component } from './exercice/Ex21/Ex21.component';
import { Ex14Component } from './exercice/Ex14/Ex14.component';
import { Ex13Component } from './exercice/Ex13/Ex13.component';
import { Ex12Component } from './exercice/Ex12/Ex12.component';
import { Sheet1Ex1Component } from './exercice/sheet1Ex1/sheet1Ex1.component';
import { ExerciceComponent } from './exercice/exercice.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '' , component: ExerciceComponent },
  {path: 'exercice' , component: ExerciceComponent,  children :[
    {path: 'aboutMe' , component: AboutMeComponent },
    {path: 'sheet1Ex1' , component: Sheet1Ex1Component },
    {path: 'Ex12' , component: Ex12Component },
    {path: 'Ex13' , component: Ex13Component },
    {path: 'Ex14' , component: Ex14Component },
    {path: 'Ex21' , component: Ex21Component },
    {path: 'Ex22' , component: Ex22Component },
    {path: 'Ex23' , component: Ex23Component },
    {path: 'Ex31' , component: Ex31Component },
    {path: 'Ex32' , component: Ex32Component },
    {path: 'Ex33' , component: Ex33Component },
    {path: 'Ex41' , component: Ex41Component },
    {path: 'Ex42' , component: Ex42Component },
    {path: 'Ex43' , component: Ex43Component },
    {path: 'Ex44' , component: Ex44Component },
    {path: 'Ex51' , component: Ex51Component },
    {path: 'Ex52' , component: Ex52Component },
    {path: 'Ex53' , component: Ex53Component },
    {path: 'Ex61' , component: Ex61Component },
    {path: 'Ex62' , component: Ex62Component },
    {path: 'Ex63' , component: Ex63Component },
    {path: 'Ex64' , component: Ex64Component },
    {path: 'Ex65' , component: Ex65Component },
    {path: 'Ex71' , component: Ex71Component },
    {path: 'Ex72' , component: Ex72Component },
    {path: 'Ex81' , component: Ex81Component },
    {path: 'Ex82' , component: Ex82Component },
    {path: 'Ex91' , component: Ex91Component },
    {path: 'Ex92' , component: Ex92Component },
    {path: 'Ex101' , component: Ex101Component },
    {path: 'Ex102' , component: Ex102Component },
    {path: 'Ex103' , component: Ex103Component },
    {path: 'Ex111' , component: Ex111Component },
    {path: 'Ex112' , component: Ex112Component },
    {path: 'Ex113' , component: Ex113Component },
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
