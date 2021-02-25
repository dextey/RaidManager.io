import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { RaidOneComponent } from './raid-one/raid-one.component';
import { RefreshComponent } from './refresh/refresh.component';
import { RegisterComponent } from './register/register.component';
import { RosterComponent } from './roster/roster.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'roster', component: RosterComponent},
  { path: 'raid', component: RaidOneComponent},
  { path: 'account', component: AccountComponent, canActivate: [AuthGuard]},
  { path: 'account/edit', component: EditProfileComponent, canActivate: [AuthGuard]},
  { path: 'profile', component: ProfileComponent},
  { path: 'profile/:name/:realm', component: ProfileComponent},
  { path: 'refresh', component: RefreshComponent},
  { path: 'search/:term', component: SearchResultsComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
