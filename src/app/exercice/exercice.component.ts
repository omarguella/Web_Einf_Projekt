import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent implements OnInit {

  @Output() sheet1 : boolean  ;
  @Output() sheet2 : boolean;
  @Output() sheet3 : boolean ;
  @Output() sheet4 : boolean ;
  @Output() sheet5 : boolean ;


  constructor() { }

  ngOnInit() {
  }


  sheet1clicked()
  {
    this.sheet1 = true ;
    this.sheet2 = false ;
    this.sheet3 = false ;
    this.sheet4 = false ;
    this.sheet5 = false ;
  }

  sheet2clicked()
  {
    this.sheet1 = false ;
    this.sheet2 = true ;
    this.sheet3 = false ;
    this.sheet4 = false ;
    this.sheet5 = false ;
  }

  sheet3clicked()
  {
    this.sheet1 = false ;
    this.sheet2 = false ;
    this.sheet3 = true ;
    this.sheet4 = false ;
    this.sheet5 = false ;
  }

  sheet4clicked()
  {
    this.sheet1 = false ;
    this.sheet2 = false ;
    this.sheet3 = false ;
    this.sheet4 = true ;
    this.sheet5 = false ;
  }

  sheet5clicked()
  {
    this.sheet1 = false ;
    this.sheet2 = false ;
    this.sheet3 = false ;
    this.sheet4 = false ;
    this.sheet5 = true ;
  }
}
