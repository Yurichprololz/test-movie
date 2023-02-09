import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DisableButtonService } from 'src/app/core/services/disable-button.service';
import { NavigateService } from 'src/app/core/services/navigate.service';
import { SearchService } from 'src/app/core/services/search.service';
import { Movie } from 'src/app/shared/model/movie.model';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent implements OnInit {
  movie: Movie | undefined;
  id: string | undefined;
  constructor(
    private router: ActivatedRoute,
    private disableButtonService: DisableButtonService,
    private searchService: SearchService,
    private navigator: NavigateService
  ) {}

  ngOnInit(): void {
    this.disableButtonService.isDisable(true);
    this.id = this.router.snapshot.params['id'];
    if (this.id) {
      this.searchService.getSingleVideo(this.id).subscribe({
        next: async (movie) => {
          this.movie = movie;
          // await this.donwloadImage(this.video.snippet.thumbnails.default.url);
        },
        error: (error) => {
          console.log(error);
          this.navigator.goHome();
        },
      });
    }
  }
}
