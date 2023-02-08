import { APIService } from './api.service';
import { Injectable } from '@angular/core';
import {
  fromEvent,
  debounceTime,
  map,
  switchMap,
  filter,
  distinctUntilChanged,
  catchError,
  EMPTY,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private API: APIService) {}

  searchList(){
    const inputEl = document.getElementById('search') as HTMLInputElement;
    return fromEvent(inputEl, 'input')
      .pipe(
        map((event:Event) => event.target as HTMLInputElement),
        map((input) => input.value),
        debounceTime(500),
        distinctUntilChanged(),
        filter((value) => value !== ''),
        filter((value) => value.length > 2),
        switchMap((word) => this.API.getMovies(word)),
        catchError(() => EMPTY),
      );
  }
  getSingleVideo(id: string) {
    return this.API.getFullInfo(id);
  }
}
