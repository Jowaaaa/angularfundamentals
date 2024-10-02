import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  url: string = 'http://www.omdbapi.com/?apikey=c1b3036';

  constructor(private http: HttpClient) {}

  searchMovies(search: string) {
    return this.http.get(this.url + `&s=${search}`);
  }

  searchIMDB(id: string) {
    console.log('search id', id);
    return this.http.get(this.url + `&i=${id}`);
  }
}
