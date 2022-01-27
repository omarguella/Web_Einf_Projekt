import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() sheet1 : boolean   ;
  @Input() sheet2 : boolean  ;
  @Input() sheet3 : boolean  ;
  @Input() sheet4 : boolean  ;
  @Input() sheet5 : boolean  ;
  @Input() sheet6 : boolean  ;
  @Input() sheet7 : boolean  ;
  @Input() sheet8 : boolean  ;
  @Input() sheet9 : boolean  ;
  @Input() sheet10 : boolean  ;
  @Input() sheet11 : boolean  ;

  constructor() { }

  ngOnInit() {
  }



}
