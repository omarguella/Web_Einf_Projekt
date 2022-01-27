/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ex72Component } from './Ex72.component';

describe('Ex72Component', () => {
  let component: Ex72Component;
  let fixture: ComponentFixture<Ex72Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex72Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex72Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
