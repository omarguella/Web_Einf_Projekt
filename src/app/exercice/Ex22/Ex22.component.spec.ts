/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ex22Component } from './Ex22.component';

describe('Ex22Component', () => {
  let component: Ex22Component;
  let fixture: ComponentFixture<Ex22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
