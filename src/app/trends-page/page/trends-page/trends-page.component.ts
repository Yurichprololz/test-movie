import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Subscription, take } from 'rxjs';
import { APIService } from 'src/app/core/services/api.service';
import { Movie, ShortPlotMovie } from 'src/app/shared/model/movie.model';

@Component({
  selector: 'app-trends-page',
  templateUrl: './trends-page.component.html',
  styleUrls: ['./trends-page.component.scss'],
})
export class TrendsPageComponent implements OnInit, OnDestroy {
  movies$: Movie[] = [];
  sub: Subscription | undefined;

  constructor(private api: APIService) {}
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.api
      .getMovies('batman')
      .subscribe((videos) =>
        videos.forEach((video) =>
          video.subscribe((film) => this.movies$.push(film)),
          take(1)
        )
      );
    // this.api.getMovies('batman').pipe(
    //   map((video) => {
    //     console.log(video);
    //     this.movies$ = video;
    //   }),
    // );
  }
}
