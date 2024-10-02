import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { NgFor, NgIf } from '@angular/common';
import { City } from './shared/models/city';
import { car } from './shared/interfaces/ICar';
import { FormsModule } from '@angular/forms';
import { CityService } from './shared/services/city.service';
import { MovieService } from './shared/services/movie.service';
import { map } from 'rxjs';
import { CityDetailsComponent } from './city-details/city-details.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@Component({
  selector: 'app-root',
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
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
