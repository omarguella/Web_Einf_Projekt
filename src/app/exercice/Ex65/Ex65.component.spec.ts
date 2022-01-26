/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ex65Component } from './Ex65.component';

describe('Ex65Component', () => {
  let component: Ex65Component;
  let fixture: ComponentFixture<Ex65Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex65Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex65Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
