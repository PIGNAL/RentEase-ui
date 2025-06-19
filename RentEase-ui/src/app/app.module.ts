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
@NgModule({
  imports: [
  CarFormComponent,
  LoginComponent,
  RegisterComponent,
  NavbarComponent,
  SharedCommonModule,
  RouterModule.forRoot(routes),
],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthService,
    CarService

  ],
})
export class AppModule { }
