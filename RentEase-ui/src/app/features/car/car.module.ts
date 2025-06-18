import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarFormComponent } from './car-form/car-form.component';
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
  ]
})
export class CarModule { }