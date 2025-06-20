import { Car } from "./car.model";

export class Rental {
    id:number;
    carId: number;
    startDate: Date;
    endDate: Date;
    car: Car
    constructor(
    id: number,
    carId: number,
    startDate: Date,
    endDate: Date,
    car: Car
  ) {
    this.carId = carId;
    this.id = id;
    this.startDate = startDate;
    this.endDate = endDate;
    this.car = car;
  }
}