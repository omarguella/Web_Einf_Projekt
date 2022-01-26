/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ex61Component } from './Ex61.component';

describe('Ex61Component', () => {
  let component: Ex61Component;
  let fixture: ComponentFixture<Ex61Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex61Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex61Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
