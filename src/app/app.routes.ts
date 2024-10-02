import { Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect empty path to /home
  { path: 'home', component: HomeComponent },
  { path: 'main', component: MainComponent },
  { path: 'details/:id', component: MovieDetailsComponent },
];
