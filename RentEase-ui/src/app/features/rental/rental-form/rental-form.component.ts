import { Component, effect, OnInit, signal } from '@angular/core';
import { SharedCommonModule } from '../../../shared/common/common.module';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CarService } from '../../../core/services/car.service';
import { RentalService } from '../../../core/services/rental.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Rental } from '../../../domain/models/rental.model';

@Component({
  selector: 'app-rental-form',
  imports: [SharedCommonModule],
  templateUrl: './rental-form.component.html',
  styleUrl: './rental-form.component.scss'
})
export class RentalFormComponent implements OnInit {
  rentalForm: FormGroup;
  availableCars = signal<any[]>([]);
  rental = signal<Rental | null>(null);
  loading = signal(false);
  id?: number;

  constructor(
    private fb: FormBuilder,
    private carService: CarService,
    private rentalService: RentalService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.rentalForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      carId: ['', Validators.required]
    });

     this.rental = this.rentalService.rental;
    effect(() => {
      const r = this.rental();
      if (r) {
        console.log('Rental data:', r);
        this.rentalForm.patchValue({
          startDate: r.startDate ? formatDateForInput(r.startDate) : '',
          endDate: r.endDate ? formatDateForInput(r.endDate) : '',
          carId: r.carId
        });
      }
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.id = +id;
      this.rentalService.fetchRental(this.id);
    }
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

    if (this.id) {
      this.rentalService.updateRental({ ...this.rentalForm.value, id:this.id }).subscribe(() => {
        alert('Alquiler modificado correctamente');
        this.router.navigate(['/rental/list']);
      });
    } else {
      this.rentalService.registerRental(this.rentalForm.value).subscribe(() => {
        alert('Alquiler registrado correctamente');
        this.router.navigate(['/rental/list']);
      });
    }
  }
}

function formatDateForInput(date: string | Date): string {
  const d = new Date(date);
  const offset = d.getTimezoneOffset();
  d.setMinutes(d.getMinutes() - offset);
  return d.toISOString().slice(0, 10);
}
