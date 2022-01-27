/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ex71Component } from './Ex71.component';

describe('Ex71Component', () => {
  let component: Ex71Component;
  let fixture: ComponentFixture<Ex71Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex71Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex71Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
