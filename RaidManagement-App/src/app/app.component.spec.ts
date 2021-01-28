import { FormsModule } from '@angular/forms';
import { RefreshComponent } from './refresh/refresh.component';
import { FooterComponent } from './footer/footer.component';
import { BackgroundComponent } from './background/background.component';
import { SearchComponent } from './search/search.component';
import { RosterComponent } from './roster/roster.component';
import { RaidOneComponent } from './raid-one/raid-one.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AccountComponent,
        HomeComponent,
        LoginComponent,
        SearchComponent,
        NavbarComponent,
        ProfileComponent,
        RaidOneComponent,
        RosterComponent,
        BackgroundComponent,
        FooterComponent,
        RefreshComponent
      ],
      imports: [ HttpClientTestingModule,
        RouterTestingModule,
        FormsModule ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'RaidManagement-App'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('RaidManagement-App');
  });

});
