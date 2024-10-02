import { City } from './city';

export class CityOrderModel {
  constructor(public city: City, public numBookings: number = 1) {}
}
