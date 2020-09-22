import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { GuildComponent } from './guild/guild.component';
import { RaidOneComponent } from './raid-one/raid-one.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'navbar', component: NavbarComponent},
    { path: 'guild', component: GuildComponent},
    { path: 'raid', component: RaidOneComponent},
    { path: '**', redirectTo: 'home', pathMatch: 'full'}
];