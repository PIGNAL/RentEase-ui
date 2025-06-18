import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarFormComponent } from './features/car/car-form/car-form.component';

const routes: Routes = [
    { path: 'home', component: CarFormComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
