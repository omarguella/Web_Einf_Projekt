/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ex21Component } from './Ex21.component';

describe('Ex21Component', () => {
  let component: Ex21Component;
  let fixture: ComponentFixture<Ex21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
