import { Component, signal } from '@angular/core';
import { SharedCommonModule } from '../../../shared/common/common.module';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CarService } from '../../../core/services/car.service';
import { RentalService } from '../../../core/services/rental.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rental-form',
  imports: [SharedCommonModule],
  templateUrl: './rental-form.component.html',
  styleUrl: './rental-form.component.scss'
})
export class RentalFormComponent {
  rentalForm: FormGroup;
  availableCars = signal<any[]>([]);
  loading = signal(false);

  constructor(
    private fb: FormBuilder,
    private carService: CarService,
    private rentalService: RentalService,
    private router: Router
  ) {
    this.rentalForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      carId: ['', Validators.required]
    });
  }

  onSearchAvailability() {
    const { startDate, endDate } = this.rentalForm.value;
    if (startDate && endDate) {
      this.loading.set(true);
      this.carService.getAvailableCars(startDate, endDate).subscribe(cars => {
        this.availableCars.set(cars);
        this.loading.set(false);
      });
    }
  }

  onSubmit() {
    if (this.rentalForm.invalid) return;
    this.rentalService.registerRental(this.rentalForm.value).subscribe(() => {
      alert('Alquiler registrado correctamente');
      this.router.navigate(['/home']);
    });
  }
}
