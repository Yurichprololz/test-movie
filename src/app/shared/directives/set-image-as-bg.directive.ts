import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Movie } from 'src/app/shared/model/movie.model';

@Directive({
  selector: '[dirSetBg]',
})
export class SetImageAsBgDirective implements OnInit {
  @Input('dirSetBg') movie: Movie | undefined;

  constructor(private element: ElementRef, private ref: Renderer2) {}

  ngOnInit() {
    if (this.movie) {
      const urlImage =
        this.movie.Poster !== 'N/A'
          ? `${this.movie?.Poster}`
          : '../../../assets/404.jpg';
      this.ref.setStyle(
        this.element.nativeElement,
        'background',
        `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${urlImage})`
      );
    }
  }
}
