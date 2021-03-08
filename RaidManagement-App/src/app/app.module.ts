import { SearchService } from './services/search.service';
import { ErrorInterceptorProvider } from './services/error.interceptor';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RaidOneComponent } from './raid-one/raid-one.component';
import { RosterComponent } from './roster/roster.component';
import { AccountComponent } from './account/account.component';
import { FooterComponent } from './footer/footer.component';
import { BackgroundComponent } from './background/background.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { RefreshComponent } from './refresh/refresh.component';
import { LoginComponent } from './login/login.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      HomeComponent,
      RegisterComponent,
      RaidOneComponent,
      RosterComponent,
      AccountComponent,
      FooterComponent,
      BackgroundComponent,
      SearchComponent,
      ProfileComponent,
      RefreshComponent,
      LoginComponent,
      EditProfileComponent,
      SearchResultsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      FontAwesomeModule,
      BsDropdownModule.forRoot()
   ],
   providers: [
      AuthService,
      SearchService,
      ErrorInterceptorProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
