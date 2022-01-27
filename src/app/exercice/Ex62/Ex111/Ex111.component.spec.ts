/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ex111Component } from './Ex111.component';

describe('Ex111Component', () => {
  let component: Ex111Component;
  let fixture: ComponentFixture<Ex111Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex111Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
