/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ex103Component } from './Ex103.component';

describe('Ex103Component', () => {
  let component: Ex103Component;
  let fixture: ComponentFixture<Ex103Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex103Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
