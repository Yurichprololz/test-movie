import { APIService } from './api.service';
import { Injectable } from '@angular/core';
import {
  fromEvent,
  debounceTime,
  map,
  tap,
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

  searchList() {
    const input = document.getElementById('search') as HTMLInputElement;
    return fromEvent(input, 'input').pipe(
      map((event: Event) => event.target as HTMLInputElement),
      map((input) => input.value),
      tap((input) => console.log(input)),
      debounceTime(500),
      distinctUntilChanged(),
      filter((value) => value.length > 2 || value.length === 0),
      switchMap((word) => this.API.getMovies(word)),
      catchError(() => EMPTY)
    );
  }

  getSingleVideo(id: string) {
    return this.API.getFullInfo(id);
  }
}
