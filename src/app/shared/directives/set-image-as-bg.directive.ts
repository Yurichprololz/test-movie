import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Movie } from 'src/app/shared/model/movie.model';

@Directive({
  selector: '[dirSetBg]'
})
export class SetImageAsBgDirective implements OnInit {

  @Input('dirSetBg') movie!: Movie;

  constructor(private element :ElementRef, private ref: Renderer2) { }

  ngOnInit() {
    this.ref.setStyle(this.element.nativeElement, 'background-image', `url(${this.movie.Poster})`);
  }

}
