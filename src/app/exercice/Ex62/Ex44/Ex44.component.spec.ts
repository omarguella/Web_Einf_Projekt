/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ex44Component } from './Ex44.component';

describe('Ex44Component', () => {
  let component: Ex44Component;
  let fixture: ComponentFixture<Ex44Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex44Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
