import { AboutMeComponent } from './exercice/aboutMe/aboutMe.component';
import { Ex65Component } from './exercice/Ex65/Ex65.component';
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
import { Ex51Component } from './exercice/Ex51/Ex51.component';
import { Ex44Component } from './exercice/Ex44/Ex44.component';
import { Ex43Component } from './exercice/Ex43/Ex43.component';
import { Ex42Component } from './exercice/Ex42/Ex42.component';
import { Ex41Component } from './exercice/Ex41/Ex41.component';
import { Ex33Component } from './exercice/Ex33/Ex33.component';
import { Ex31Component } from './exercice/Ex31/Ex31.component';
import { Ex23Component } from './exercice/Ex23/Ex23.component';
import { Ex22Component } from './exercice/Ex22/Ex22.component';
import { Ex21Component } from './exercice/Ex21/Ex21.component';
import { Ex14Component } from './exercice/Ex14/Ex14.component';
import { Ex13Component } from './exercice/Ex13/Ex13.component';
import { Ex12Component } from './exercice/Ex12/Ex12.component';
import { Sheet1Ex1Component } from './exercice/sheet1Ex1/sheet1Ex1.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilComponent } from './profil/profil.component';
import { ExerciceComponent } from './exercice/exercice.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TasksComponent } from './tasks/tasks.component';
import { SolutionComponent } from './solution/solution.component';
import { BodyComponent } from './body/body.component';
import { Ex32Component } from './exercice/Ex32/Ex32.component';
import { Ex52Component } from './exercice/Ex52/Ex52.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [						
    AppComponent,
    ProfilComponent,
    ExerciceComponent,
      NavBarComponent,
      TasksComponent,
      SolutionComponent,
      BodyComponent,
      Sheet1Ex1Component,
      Ex12Component,
      Ex13Component,
      Ex14Component,
      Ex21Component,
      Ex22Component,
      Ex23Component,
      Ex31Component,
      Ex32Component,
      Ex33Component,
      Ex41Component,
      Ex42Component,
      Ex43Component,
      Ex44Component,
      Ex51Component,
      Ex52Component,
      Ex53Component,
      Ex61Component,
      Ex62Component,
      Ex63Component,
      Ex64Component,
      Ex65Component,
      Ex71Component,
      Ex72Component,
      Ex81Component,
      Ex82Component,
      Ex91Component,
      Ex92Component,
      Ex101Component,
      Ex102Component,
      Ex103Component,
      Ex111Component,
      Ex112Component,
      AboutMeComponent

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
