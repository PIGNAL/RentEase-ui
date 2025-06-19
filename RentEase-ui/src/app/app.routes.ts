import { Routes } from '@angular/router';
import { CarFormComponent } from './features/car/car-form/car-form.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { AuthGuard } from './core/guards/auth-guard';

 export const routes: Routes = [
    { path: 'Car', component: CarFormComponent , canActivate: [AuthGuard] },
    { path: 'Car/:id', component: CarFormComponent, canActivate: [AuthGuard] },
    { path: 'home', component:HomeComponent , canActivate: [AuthGuard]},
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
];
