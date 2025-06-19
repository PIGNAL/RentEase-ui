import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../envioremnts/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrlCar = `${environment}/api/car`

  constructor(private http: HttpClient) {}

  createCar(car: Car): Observable<number> {
    return this.http.post<number>(`${this.apiUrlCar}`, car);
  }

  updateCar(car: Car): Observable<boolean> {
    return this.http.put<boolean>(`${this.apiUrlCar}`, car);
  }

  deleteCar(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrlCar}/${id}`);
  }

  getCar(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.apiUrlCar}/${id}`);
  }
}