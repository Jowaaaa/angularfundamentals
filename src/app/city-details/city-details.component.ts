import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { City } from '../shared/models/city';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-city-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './city-details.component.html',
  styleUrl: './city-details.component.css',
})
export class CityDetailsComponent {
  isFavorite: boolean = true;
  @Input() city?: City;
  @Output() rating: EventEmitter<number> = new EventEmitter<number>();
  @Output() fav: EventEmitter<boolean> = new EventEmitter<boolean>();

  rate(num: number): void {
    console.log('rating for ', this.city?.name, ': ', num);
    this.rating.emit(num);
  }

  ngOnChanges(change: SimpleChanges) {
    // debugger;
    if (this.city) {
      console.log('in Changes: received new city -->', change);
      this.isFavorite = !!this.city.favorite; // explicitly convert to boolean using !!
    }
  }

  // City is favorite - or not !
  favorite() {
    this.isFavorite = !this.isFavorite;
    this.fav.emit(this.isFavorite);
  }
}
