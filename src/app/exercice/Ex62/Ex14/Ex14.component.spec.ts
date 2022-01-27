/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ex14Component } from './Ex14.component';

describe('Ex14Component', () => {
  let component: Ex14Component;
  let fixture: ComponentFixture<Ex14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
