/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Sheet1Ex1Component } from './sheet1Ex1.component';

describe('Sheet1Ex1Component', () => {
  let component: Sheet1Ex1Component;
  let fixture: ComponentFixture<Sheet1Ex1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sheet1Ex1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sheet1Ex1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
