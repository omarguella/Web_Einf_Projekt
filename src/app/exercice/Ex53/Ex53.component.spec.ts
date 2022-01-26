/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ex53Component } from './Ex53.component';

describe('Ex53Component', () => {
  let component: Ex53Component;
  let fixture: ComponentFixture<Ex53Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex53Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex53Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
