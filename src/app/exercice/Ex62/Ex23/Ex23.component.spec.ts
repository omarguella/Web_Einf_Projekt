/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ex23Component } from './Ex23.component';

describe('Ex23Component', () => {
  let component: Ex23Component;
  let fixture: ComponentFixture<Ex23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
