/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IdCardComponent } from './IdCard.component';

describe('IdCardComponent', () => {
  let component: IdCardComponent;
  let fixture: ComponentFixture<IdCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
