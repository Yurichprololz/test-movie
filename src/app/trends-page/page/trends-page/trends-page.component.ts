import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/core/services/api.service';
import { Movie } from 'src/app/shared/model/movie.model';

@Component({
  selector: 'app-trends-page',
  templateUrl: './trends-page.component.html',
  styleUrls: ['./trends-page.component.scss'],
})
export class TrendsPageComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private api: APIService) {}

  ngOnInit(): void {
    this.movies = this.api.getMovies();
  }
}
