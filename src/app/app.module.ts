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

@NgModule({
  declarations: [						
    AppComponent,
    ProfilComponent,
    ExerciceComponent,
      NavBarComponent,
      TasksComponent,
      SolutionComponent,
      BodyComponent,
      Sheet1Ex1Component
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
