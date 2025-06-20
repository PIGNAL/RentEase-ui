import { Component, OnInit, effect, inject, signal } from '@angular/core';
import { SharedCommonModule } from '../../../shared/common/common.module';
import { CarService } from '../../../core/services/car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Car } from '../../../domain/models/car.model';

@Component({
  selector: 'app-car-form',
  imports: [SharedCommonModule],
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {
  carId?: number;
  carForm: FormGroup;
  car = signal<Car | null>(null);

  constructor(private carService: CarService,
              private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder) {
    
    this.carForm = this.fb.group({
      type: ['', Validators.required],
      model: ['', Validators.required]
    });
    
    this.car = this.carService.car;
    effect(() => {
      const c = this.car();
      if (c) {
        this.carForm.patchValue({
          type: c.type,
          model: c.model
        });
      }
    });
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.carId = +idParam;
      this.carService.fetchCar(this.carId);
    }
  }

  onSubmit(): void {
    if (this.carForm.invalid) return;

    const formValue = this.carForm.value;

    if (this.carId) {
      this.carService.updateCar({ ...formValue, id: this.carId }).subscribe(() => {
        alert('Auto modificado correctamente');
        this.router.navigate(['/car/list']);
      });
    } else {
      this.carService.createCar(formValue).subscribe(() => {
        alert('Auto creado correctamente');
        this.router.navigate(['/car/list']);
      });
    }
  }
}