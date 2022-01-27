/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ex33Component } from './Ex33.component';

describe('Ex33Component', () => {
  let component: Ex33Component;
  let fixture: ComponentFixture<Ex33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex33Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
