import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Movie, ShortPlotMovie } from 'src/app/shared/model/movie.model';

@Component({
  selector: 'app-trends-card',
  templateUrl: './trends-card.component.html',
  styleUrls: ['./trends-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrendsCardComponent {
  @Input() movie: Movie | undefined;
}
