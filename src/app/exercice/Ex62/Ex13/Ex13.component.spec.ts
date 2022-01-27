/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ex13Component } from './Ex13.component';

describe('Ex13Component', () => {
  let component: Ex13Component;
  let fixture: ComponentFixture<Ex13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
