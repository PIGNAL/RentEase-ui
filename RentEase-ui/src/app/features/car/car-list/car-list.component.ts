import { Component, signal } from '@angular/core';
import { SharedCommonModule } from '../../../shared/common/common.module';
import { CarService } from '../../../core/services/car.service';
import { Router } from '@angular/router';
import { Car } from '../../../domain/models/car.model';

@Component({
  selector: 'app-car-list',
  imports: [SharedCommonModule],
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent {
  cars = signal<Car[]>([]);
  loading = signal(true);


  constructor(
    private carService: CarService,
    private router: Router
  ) {
    this.fetchCars();
  }

  fetchCars() {
    this.loading.set(true);
    this.carService.fetchCars().add(() => this.loading.set(false));
    this.cars = this.carService.cars;
  }

  newCar() {
    this.router.navigate(['/car']);
  }

  editCar(car: Car) {
    this.router.navigate(['/car', car.id]);
  }

  deleteCar(car: Car) {
    if (confirm(`¿Seguro que deseas eliminar el auto "${car.model}"?`)) {
      this.carService.deleteCar(car.id).subscribe(() => {
        this.fetchCars();
      });
    }
  }
}