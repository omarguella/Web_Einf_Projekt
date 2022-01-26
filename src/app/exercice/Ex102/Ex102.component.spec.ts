/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ex102Component } from './Ex102.component';

describe('Ex102Component', () => {
  let component: Ex102Component;
  let fixture: ComponentFixture<Ex102Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex102Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
