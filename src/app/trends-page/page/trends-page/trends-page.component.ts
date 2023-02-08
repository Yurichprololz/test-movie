import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Subscription, take, tap } from 'rxjs';
import { APIService } from 'src/app/core/services/api.service';
import { SearchService } from 'src/app/core/services/search.service';
import { Movie, ShortPlotMovie } from 'src/app/shared/model/movie.model';

@Component({
  selector: 'app-trends-page',
  templateUrl: './trends-page.component.html',
  styleUrls: ['./trends-page.component.scss'],
})
export class TrendsPageComponent implements OnInit, OnDestroy {
  movies$: Movie[] = [];
  search$: Subscription | undefined;

  constructor(private api: APIService, private search: SearchService) {}
  ngOnDestroy(): void {
    this.search$?.unsubscribe();
  }

  ngOnInit(): void {
    this.search$ = this.search
      .searchList().pipe(tap(() => this.movies$ = []))
      .subscribe((videos) =>
        videos.forEach(
          (video) => video.subscribe((film) => this.movies$.push(film))
        )
      );
  }
}
