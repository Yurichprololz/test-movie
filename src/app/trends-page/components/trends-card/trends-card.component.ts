import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NavigateService } from 'src/app/core/services/navigate.service';
import { Movie } from 'src/app/shared/model/movie.model';

@Component({
  selector: 'app-trends-card',
  templateUrl: './trends-card.component.html',
  styleUrls: ['./trends-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrendsCardComponent {
  @Input() movie: Movie | undefined;
  constructor(private navigate: NavigateService) {}

  toDetailedPage() {
    console.log('Here')
    if (this.movie && this.movie.imdbID) {
      this.navigate.toDetailedPage(this.movie.imdbID);
    }
  }
}
