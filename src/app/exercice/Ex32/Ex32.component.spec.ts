/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ex32Component } from './Ex32.component';

describe('Ex32Component', () => {
  let component: Ex32Component;
  let fixture: ComponentFixture<Ex32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex32Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
