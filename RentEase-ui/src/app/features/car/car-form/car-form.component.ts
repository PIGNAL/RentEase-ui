import { Component, OnInit } from '@angular/core';
import { CarService } from '../../../core/services/car.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  standalone: false,
  styleUrl: './car-form.component.scss'
})
export class CarFormComponent implements OnInit {
  
  public car: Car = { id: 0, type: '', model: '' };
  public carId?: number;

  constructor(
    private readonly carService: CarService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.carId = +idParam;
      this.carService.getCar(this.carId).subscribe(car => this.car = car);
    }
  }

  onSubmit(): void {
    if (this.carId) {
      this.car.id = this.carId;
      this.carService.updateCar(this.car).subscribe(() => {
        alert('Successfully modified car');
        this.router.navigate(['/home']);
      });
    } else {
      this.carService.createCar(this.car).subscribe(() => {
        alert('Auto added successfully');
        this.router.navigate(['/home']);
      });
    }
  }

}
