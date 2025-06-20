import { Car } from "./car.model";

export class Rental {
    customerId: number;
    carId: number;
    startDate: Date;
    endDate: Date;
    car: Car
    constructor(
    customerId: number,
    carId: number,
    startDate: Date,
    endDate: Date,
    car: Car
  ) {
    this.carId = carId;
    this.customerId = customerId;
    this.startDate = startDate;
    this.endDate = endDate;
    this.car = car;
  }
}