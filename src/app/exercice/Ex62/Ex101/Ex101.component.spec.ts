/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ex101Component } from './Ex101.component';

describe('Ex101Component', () => {
  let component: Ex101Component;
  let fixture: ComponentFixture<Ex101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
