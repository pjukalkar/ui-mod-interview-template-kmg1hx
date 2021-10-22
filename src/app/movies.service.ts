import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {movies} from './movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  moviesList = movies;

  getMoviesList(): Observable<any> {
    return of(this.moviesList);
  }

}
