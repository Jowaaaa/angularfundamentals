import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CityDetailsComponent } from '../city-details/city-details.component';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { City } from '../shared/models/city';
import { car } from '../shared/interfaces/ICar';
import { CityService } from '../shared/services/city.service';
import { MovieService } from '../shared/services/movie.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonComponent,
    NgFor,
    NgIf,
    FormsModule,
    CityDetailsComponent,
    MovieDetailsComponent,

    RouterLink,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  city?: string; //city = 'Maastricht'
  cities: City[] = []; //Array<string>
  bgColor: string = 'transparent';

  public currentCity?: City;
  public currentMovie?: any;
  public movies: any;
  public movie: any;
  car: car[] = [
    { id: 1, brand: 'Suzuki', model: 'Swift Sport', price: 22000 },
    { id: 2, brand: 'Porsche', model: '991 GT3 RS', price: 359500 },
  ];

  title = 'AngularDemo';

  constructor(
    private cityService: CityService,
    private movieService: MovieService
  ) {
    //this.city = 'Sittard' Best-practice om constructor leeg te laten.
  }

  showDetails(city: City) {
    alert('je wilt details voor' + ' ' + city.name);
  }

  getCity(city: City) {
    this.currentCity = city;
  }

  getMovieDetails(movie: any) {
    this.currentMovie = movie;
  }

  showCarDetails(car: car) {
    alert('De prijs is' + ' ' + car.price);
  }

  addColor(divColor: HTMLInputElement) {
    this.bgColor = divColor.value;
    divColor.value = '';
  }

  handleKey(city: HTMLInputElement, population: HTMLInputElement) {
    this.city = city.value;
    let newCity: City = new City(
      this.city.length + 1,
      city.value,
      'onbekend',
      +population.value
    );

    this.cities.push(newCity);
    population.value = '';
    city.value = '';
  }

  // removeCity(city: City) {
  //   this.city = this.city?.filter(({ id }) => id !== city.id);
  // }

  ngOnInit() {
    this.city = 'Maastricht';
    this.cityService.getCities().subscribe((result) => {
      this.cities = result;
    });

    //this.cities = this.cityService.getCities();
    // this.cities = [
    //   new City(1, 'Maastricht', 'Limburg'),
    //   new City(2, 'Valkenburg', 'Limburg', 10500, 37),
    //   new City(3, 'Gulpen', 'Limburg', 4000),
    // ];
    this.car;
  }

  searchMovies(search: string) {
    this.movieService
      .searchMovies(search)
      .pipe(map((movies: any) => movies.Search))
      .subscribe((movieData) => {
        this.movies = movieData;
        console.log(movieData);
      });
  }
}
