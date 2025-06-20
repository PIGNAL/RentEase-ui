export class RentalRequest {
  startDate: Date;
  endDate: Date;
  carId: number;

  constructor(startDate: Date, endDate: Date, carId: number) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.carId = carId;
  }
}