import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css'],
})
export class ExerciceComponent implements OnInit {
  @Output() sheet1: boolean;
  @Output() sheet2: boolean;
  @Output() sheet3: boolean;
  @Output() sheet4: boolean;
  @Output() sheet5: boolean;
  @Output() sheet6: boolean;
  @Output() sheet7: boolean;
  @Output() sheet8: boolean;
  @Output() sheet9: boolean;
  @Output() sheet10: boolean;
  @Output() sheet11: boolean;

  constructor(private _router: Router) {}

  ngOnInit() {
    this.sheet1 = true;
    this._router.navigate(['exercice/sheet1Ex1']);
  }

  sheet1clicked() {
    this.sheet1 = true;
    this.sheet2 = false;
    this.sheet3 = false;
    this.sheet4 = false;
    this.sheet5 = false;
    this.sheet6 = false;
    this.sheet7 = false;
    this.sheet8 = false;
    this.sheet9 = false;
    this.sheet10 = false;
    this.sheet11 = false;
  }

  sheet2clicked() {
    this.sheet1 = false;
    this.sheet2 = true;
    this.sheet3 = false;
    this.sheet4 = false;
    this.sheet5 = false;
    this.sheet6 = false;
    this.sheet7 = false;
    this.sheet8 = false;
    this.sheet9 = false;
    this.sheet10 = false;
    this.sheet11 = false;
  }

  sheet3clicked() {
    this.sheet1 = false;
    this.sheet2 = false;
    this.sheet3 = true;
    this.sheet4 = false;
    this.sheet5 = false;
    this.sheet6 = false;
    this.sheet7 = false;
    this.sheet8 = false;
    this.sheet9 = false;
    this.sheet10 = false;
    this.sheet11 = false;
  }

  sheet4clicked() {
    this.sheet1 = false;
    this.sheet2 = false;
    this.sheet3 = false;
    this.sheet4 = true;
    this.sheet5 = false;
    this.sheet6 = false;
    this.sheet7 = false;
    this.sheet8 = false;
    this.sheet9 = false;
    this.sheet10 = false;
    this.sheet11 = false;
  }

  sheet5clicked() {
    this.sheet1 = false;
    this.sheet2 = false;
    this.sheet3 = false;
    this.sheet4 = false;
    this.sheet5 = true;
    this.sheet6 = false;
    this.sheet7 = false;
    this.sheet8 = false;
    this.sheet9 = false;
    this.sheet10 = false;
    this.sheet11 = false;
  }

  sheet6clicked() {
    this.sheet1 = false;
    this.sheet2 = false;
    this.sheet3 = false;
    this.sheet4 = false;
    this.sheet5 = false;
    this.sheet6 = true;
    this.sheet7 = false;
    this.sheet8 = false;
    this.sheet9 = false;
    this.sheet10 = false;
    this.sheet11 = false;
  }

  sheet7clicked() {
    this.sheet1 = false;
    this.sheet2 = false;
    this.sheet3 = false;
    this.sheet4 = false;
    this.sheet5 = false;
    this.sheet6 = false;
    this.sheet7 = true;
    this.sheet8 = false;
    this.sheet9 = false;
    this.sheet10 = false;
    this.sheet11 = false;
  }

  sheet8clicked() {
    this.sheet1 = false;
    this.sheet2 = false;
    this.sheet3 = false;
    this.sheet4 = false;
    this.sheet5 = false;
    this.sheet6 = false;
    this.sheet7 = false;
    this.sheet8 = true;
    this.sheet9 = false;
    this.sheet10 = false;
    this.sheet11 = false;
  }

  sheet9clicked() {
    this.sheet1 = false;
    this.sheet2 = false;
    this.sheet3 = false;
    this.sheet4 = false;
    this.sheet5 = false;
    this.sheet6 = false;
    this.sheet7 = false;
    this.sheet8 = false;
    this.sheet9 = true;
    this.sheet10 = false;
    this.sheet11 = false;
  }

  sheet10clicked() {
    this.sheet1 = false;
    this.sheet2 = false;
    this.sheet3 = false;
    this.sheet4 = false;
    this.sheet5 = false;
    this.sheet6 = false;
    this.sheet7 = false;
    this.sheet8 = false;
    this.sheet9 = false;
    this.sheet10 = true;
    this.sheet11 = false;
  }

  sheet11clicked() {
    this.sheet1 = false;
    this.sheet2 = false;
    this.sheet3 = false;
    this.sheet4 = false;
    this.sheet5 = false;
    this.sheet6 = false;
    this.sheet7 = false;
    this.sheet8 = false;
    this.sheet9 = false;
    this.sheet10 = false;
    this.sheet11 = true;
  }
}
