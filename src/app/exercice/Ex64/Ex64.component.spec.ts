/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ex64Component } from './Ex64.component';

describe('Ex64Component', () => {
  let component: Ex64Component;
  let fixture: ComponentFixture<Ex64Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex64Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
