/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ex91Component } from './Ex91.component';

describe('Ex91Component', () => {
  let component: Ex91Component;
  let fixture: ComponentFixture<Ex91Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex91Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex91Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
