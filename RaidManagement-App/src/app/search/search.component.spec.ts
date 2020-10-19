/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { SearchComponent } from './search.component';
import { first } from 'rxjs/operators';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [ HttpClientTestingModule,
        RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return character name from Name-Realm string', () => {
    const charName = 'Baidoqt';
    const nameRealmString = 'Baidoqt-BurningLegion';
    expect(component.getCharacterNameFromFullString(nameRealmString)).toBe(charName);
  });

  it('should return realm name from Name-Realm string', () => {
    const realmName = 'BurningLegion';
    const nameRealmString = 'Baidoqt-BurningLegion';
    expect(component.getRealmNameFromFullString(nameRealmString)).toBe(realmName);
  });

  it('search text input format should match regular expression', () => {
    const firstString = 'Xime-BurningLegion';
    const secondString = 'xime-burninglegion';
    const thirdString = 'x.-me-burninglegion';
    expect(component.isSearchValid(firstString)).toBe(true);
    expect(component.isSearchValid(secondString)).toBe(true);
    expect(component.isSearchValid(thirdString)).toBeFalse();
  });

});
