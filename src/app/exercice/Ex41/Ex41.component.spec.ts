/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ex41Component } from './Ex41.component';

describe('Ex41Component', () => {
  let component: Ex41Component;
  let fixture: ComponentFixture<Ex41Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex41Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
