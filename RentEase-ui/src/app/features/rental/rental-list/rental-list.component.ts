import { Component, signal, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RentalService } from '../../../core/services/rental.service';
import { SharedCommonModule } from '../../../shared/common/common.module';
import { Rental } from '../../../domain/models/rental.model';

@Component({
  selector: 'app-rental-list',
  imports: [SharedCommonModule],
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {
  rentals = signal<any[]>([]);
  loading = signal(true);

  constructor(private rentalService: RentalService, private router: Router) {}

  ngOnInit(): void {
    this.fetchRentals();
  }

  fetchRentals() {
    this.loading.set(true);
    this.loading.set(true);
    this.rentalService.fetchRentals().add(() => this.loading.set(false));
    this.rentals = this.rentalService.rentals;
  }

  goToRentalForm() {
    this.router.navigate(['/rental/']);
  }

  editRental(rental: Rental) {
    this.router.navigate(['/rental/',rental.id]);
  }

  cancelRental(rental: Rental) {
    if (confirm('¿Seguro que deseas cancelar este alquiler?')) {
      this.rentalService.cancelRental(rental.id).subscribe(() => {
        this.fetchRentals();
      });
    }
  }
}