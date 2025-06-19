import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CarModule } from './features/car/car.module';
import { AuthModule } from './features/auth/auth.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    RouterModule,
    CarModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
