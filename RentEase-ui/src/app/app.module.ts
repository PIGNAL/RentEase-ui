import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { AuthService } from './core/services/auth.service';
import { CarService } from './core/services/car.service';
import { CarFormComponent } from './features/car/car-form/car-form.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SharedCommonModule } from './shared/common/common.module';
import { CarListComponent } from './features/car/car-list/car-list.component';
import { RentalService } from './core/services/rental.service';
import { RentalFormComponent } from './features/rental/rental-form/rental-form.component';
import { RentalListComponent } from './features/rental/rental-list/rental-list.component';
@NgModule({
  imports: [
  CarFormComponent,
  CarListComponent,
  LoginComponent,
  RegisterComponent,
  NavbarComponent,
  SharedCommonModule,
  RentalFormComponent,
  RentalListComponent,
  RouterModule.forRoot(routes),
],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthService,
    CarService,
    RentalService
  ],
})
export class AppModule { }
