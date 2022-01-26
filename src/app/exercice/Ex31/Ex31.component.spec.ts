/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ex31Component } from './Ex31.component';

describe('Ex31Component', () => {
  let component: Ex31Component;
  let fixture: ComponentFixture<Ex31Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex31Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
