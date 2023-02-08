import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { APIService } from 'src/app/core/services/api.service';
import { SearchService } from 'src/app/core/services/search.service';
import { Movie } from 'src/app/shared/model/movie.model';

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
      .searchList()
      .subscribe((videos) => this.movies$ = videos);
  }
}
