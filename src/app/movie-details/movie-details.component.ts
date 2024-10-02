import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../shared/services/movie.service';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent {
  @Input() movie: any;
  public selectedMovie: any;

  id!: string; // Use the non-null assertion operator
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.id = params.id;
      this.movieService.searchIMDB(this.id).subscribe((movieDetails) => {
        console.log('Response structure:', movieDetails);
        this.movie = movieDetails;
        this.selectedMovie = movieDetails;
      });
    });
  }

  // getDetails(id: string) {
  //   console.log('id', id);
  //   this.movieService.searchIMDB(id).subscribe((movieDetails) => {
  //     console.log('Response structure:', movieDetails);
  //     this.movie = movieDetails;
  //     this.selectedMovie = movieDetails;
  //   });
  // }
}
