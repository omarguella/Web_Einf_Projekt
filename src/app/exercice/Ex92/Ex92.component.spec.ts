/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ex92Component } from './Ex92.component';

describe('Ex92Component', () => {
  let component: Ex92Component;
  let fixture: ComponentFixture<Ex92Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex92Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex92Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
