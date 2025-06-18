import { Component } from '@angular/core';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  standalone: false,
  styleUrl: './car-form.component.scss'
})
export class CarFormComponent {
  // Define properties for the car form
  carId: number | null = null;
  make: string = '';
  model: string = '';
  year: number | null = null;
  color: string = '';
  pricePerDay: number | null = null;

  // Method to handle form submission
  onSubmit() {
    // Logic to handle form submission, e.g., saving the car details
    console.log('Car submitted:', {
      carId: this.carId,
      make: this.make,
      model: this.model,
      year: this.year,
      color: this.color,
      pricePerDay: this.pricePerDay
    });
  }

}
