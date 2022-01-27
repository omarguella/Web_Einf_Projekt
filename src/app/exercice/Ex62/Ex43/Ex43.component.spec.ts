/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ex43Component } from './Ex43.component';

describe('Ex43Component', () => {
  let component: Ex43Component;
  let fixture: ComponentFixture<Ex43Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex43Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
