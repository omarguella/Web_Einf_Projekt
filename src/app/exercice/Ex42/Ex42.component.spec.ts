/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ex42Component } from './Ex42.component';

describe('Ex42Component', () => {
  let component: Ex42Component;
  let fixture: ComponentFixture<Ex42Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex42Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
