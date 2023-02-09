import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { APIService } from 'src/app/core/services/api.service';
import { DisableButtonService } from 'src/app/core/services/disable-button.service';
import { SearchService } from 'src/app/core/services/search.service';
import { Movie } from 'src/app/shared/model/movie.model';

@Component({
  selector: 'app-trends-page',
  templateUrl: './trends-page.component.html',
  styleUrls: ['./trends-page.component.scss']
})
export class TrendsPageComponent implements OnInit, OnDestroy {
  movies$: Movie[] = [];
  search$: Subscription | undefined;

  constructor(private api: APIService, private search: SearchService, private disableButtonService:DisableButtonService) {}


  @HostBinding('class.bg-dark')
  ngOnInit(): void {
    this.disableButtonService.isDisable(false)

    this.search$ = this.search
      .searchList()
      .subscribe((videos) => this.movies$ = videos);
  }

  ngOnDestroy(): void {
    this.search$?.unsubscribe();
  }
}
