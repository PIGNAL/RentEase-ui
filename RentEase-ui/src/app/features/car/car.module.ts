import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarFormComponent } from './car-form/car-form.component';
import { CarService } from '../../core/services/car.service';
@NgModule({
  declarations: [
    CarFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CarFormComponent
  ],
  providers: [
    CarService
  ]
})
export class CarModule { }