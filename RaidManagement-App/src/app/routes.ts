import { LoginComponent } from './login/login.component';
import { RefreshComponent } from './refresh/refresh.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './_guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { RosterComponent } from './roster/roster.component';
import { RaidOneComponent } from './raid-one/raid-one.component';
import { AccountComponent } from './account/account.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'navbar', component: NavbarComponent},
    { path: 'roster', component: RosterComponent, canActivate: [AuthGuard]},
    { path: 'raid', component: RaidOneComponent, canActivate: [AuthGuard]},
    { path: 'account', component: AccountComponent, canActivate: [AuthGuard]},
    { path: 'profile', component: ProfileComponent},
    { path: 'profile/:name/:realm', component: ProfileComponent},
    { path: 'refresh', component: RefreshComponent},
    { path: '**', redirectTo: 'home', pathMatch: 'full'}
];