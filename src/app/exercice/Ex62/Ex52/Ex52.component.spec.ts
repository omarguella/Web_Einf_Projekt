/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ex52Component } from './Ex52.component';

describe('Ex52Component', () => {
  let component: Ex52Component;
  let fixture: ComponentFixture<Ex52Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex52Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
