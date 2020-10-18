import { SearchService } from './services/search.service';
import { ErrorInterceptorProvider } from './services/error.interceptor';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RaidOneComponent } from './raid-one/raid-one.component';
import { RosterComponent } from './roster/roster.component';
import { appRoutes } from './routes';
import { AccountComponent } from './account/account.component';
import { FooterComponent } from './footer/footer.component';
import { BackgroundComponent } from './background/background.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { RefreshComponent } from './refresh/refresh.component';
import { LoginComponent } from './login/login.component';

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
      LoginComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes)
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
