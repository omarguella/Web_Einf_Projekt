/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ex81Component } from './Ex81.component';

describe('Ex81Component', () => {
  let component: Ex81Component;
  let fixture: ComponentFixture<Ex81Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex81Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex81Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
