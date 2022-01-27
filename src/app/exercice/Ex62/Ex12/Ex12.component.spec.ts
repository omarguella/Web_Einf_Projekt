/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ex12Component } from './Ex12.component';

describe('Ex12Component', () => {
  let component: Ex12Component;
  let fixture: ComponentFixture<Ex12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
