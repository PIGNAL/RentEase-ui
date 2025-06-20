import { Routes } from '@angular/router';
import { CarFormComponent } from './features/car/car-form/car-form.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { AuthGuard } from './core/guards/auth-guard';
import { CarListComponent } from './features/car/car-list/car-list.component';
import { RentalListComponent } from './features/rental/rental-list/rental-list.component';
import { RentalFormComponent } from './features/rental/rental-form/rental-form.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' }, 
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'car/list', component: CarListComponent, canActivate: [AuthGuard],data: { roles: ['Administrator'] }  },
  { path: 'car/:id', component: CarFormComponent, canActivate: [AuthGuard],data: { roles: ['Administrator'] }  },  
  { path: 'car', component: CarFormComponent, canActivate: [AuthGuard],data: { roles: ['Administrator'] }  },
  { path:'rental/list', component:RentalListComponent, canActivate: [AuthGuard] },
  { path: 'rental/:carId/:customerId', component: RentalFormComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '**', pathMatch: 'full', redirectTo: 'home' } 
];