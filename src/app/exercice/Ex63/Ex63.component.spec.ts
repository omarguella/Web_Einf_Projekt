/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ex63Component } from './Ex63.component';

describe('Ex63Component', () => {
  let component: Ex63Component;
  let fixture: ComponentFixture<Ex63Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex63Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex63Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
