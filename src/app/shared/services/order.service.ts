import { Injectable } from '@angular/core';
import { City } from '../models/city';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  Stream: Subject<City>;

  constructor() {
    this.Stream = new Subject<City>();
  }
}
