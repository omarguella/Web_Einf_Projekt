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

  constructor() { }

  ngOnInit() {
  }



}
