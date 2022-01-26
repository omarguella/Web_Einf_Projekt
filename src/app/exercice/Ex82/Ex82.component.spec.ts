/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ex82Component } from './Ex82.component';

describe('Ex82Component', () => {
  let component: Ex82Component;
  let fixture: ComponentFixture<Ex82Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex82Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex82Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
