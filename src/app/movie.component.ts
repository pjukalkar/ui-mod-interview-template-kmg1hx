import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata';
import { MoviesService } from './movies.service';

@Component({
  selector: 'movie',
  template: '',
})
export class MovieComponent implements OnInit {
  moviesListForDisplay: any;

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.moviesListForDisplay = this.movieService
      .getMoviesList()
      .subscribe((movies) => {
        return movies;
      });
    console.log(this.moviesListForDisplay);
  }
}
