/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ex62Component } from './Ex62.component';

describe('Ex62Component', () => {
  let component: Ex62Component;
  let fixture: ComponentFixture<Ex62Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex62Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex62Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
