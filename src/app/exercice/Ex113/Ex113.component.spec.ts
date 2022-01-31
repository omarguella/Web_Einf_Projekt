/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ex112Component } from './Ex112.component';

describe('Ex112Component', () => {
  let component: Ex112Component;
  let fixture: ComponentFixture<Ex112Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex112Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
