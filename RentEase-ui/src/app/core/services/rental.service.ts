import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../envioremnts/enviroment';
import { RentalRequest } from '../../domain/models/rental.request';
import { Rental } from '../../domain/models/rental.model';

@Injectable({ providedIn: 'root' })
export class RentalService {
  private apiUrlRental = `${environment.apiUrl}/api/rental`;
  rentals = signal<Rental[]>([]);

  constructor(private http: HttpClient) {}


  registerRental(rental: RentalRequest) {
    return this.http.post<boolean>(this.apiUrlRental, rental);
  }

  fetchRentals() {
    return this.http.get<Rental[]>(this.apiUrlRental).subscribe(data => this.rentals.set(data));
  }

  cancelRental(id: number) {
    return this.http.delete<boolean>(`${this.apiUrlRental}/${id}`);
  }
}