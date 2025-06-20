import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../../domain/models/car.model';
import { environment } from '../../../envioremnts/enviroment';

@Injectable({ providedIn: 'root' })
export class CarService {
  private apiUrlCar = `${environment.apiUrl}/api/car`;

  car = signal<Car | null>(null);
  cars = signal<Car[]>([]);

  constructor(private http: HttpClient) {}

  fetchCars() {
    return this.http.get<Car[]>(this.apiUrlCar).subscribe(data => this.cars.set(data));
  }

  fetchCar(id: number) {
    this.http.get<Car>(`${this.apiUrlCar}/${id}`).subscribe(data => this.car.set(data));
  }

  createCar(car: Car) {
    return this.http.post<number>(this.apiUrlCar, car);
  }

  updateCar(car: Car) {
    return this.http.put<boolean>(this.apiUrlCar, car);
  }

  deleteCar(id: number) {
    return this.http.delete<boolean>(`${this.apiUrlCar}/${id}`);
  }

  getAvailableCars(startDate: Date, endDate: Date) {
    return this.http.get<Car[]>(`${this.apiUrlCar}/available`, {
      params: {
        startDate: startDate.toString(),
        endDate: endDate.toString()
      }
    });
  }
}