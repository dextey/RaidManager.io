/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RaidOneComponent } from './raid-one.component';

describe('RaidOneComponent', () => {
  let component: RaidOneComponent;
  let fixture: ComponentFixture<RaidOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaidOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
