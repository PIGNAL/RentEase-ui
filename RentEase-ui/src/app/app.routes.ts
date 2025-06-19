import { Routes } from '@angular/router';
import { CarFormComponent } from './features/car/car-form/car-form.component';

 export const routes: Routes = [
    { path: 'home', component: CarFormComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
