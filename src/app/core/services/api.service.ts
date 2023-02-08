import { HttpClient, HttpParams } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable, Input } from '@angular/core';
import {
  catchError,
  EMPTY,
  map,
  mergeMap,
  Observable,
  Subscriber,
  take,
  tap,
  TeardownLogic,
} from 'rxjs';
import {
  ApiResponce,
  Movie,
  ShortPlotMovie,
} from 'src/app/shared/model/movie.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private http: HttpClient) {}

  getMovies(search: string) {
    const params = new HttpParams()
      .set('apikey', environment.apiKey)
      .set('s', search);

    return this.http
      .get<ApiResponce<ShortPlotMovie>>(environment.apiUrl, {
        params,
      })
      .pipe(
        map((responce) => responce.Search.map((film) => film.imdbID)),
        mergeMap(async (IDs: string[]) => IDs.map((id) => this.getFullInfo(id)))
      );
  }
  getFullInfo(id: string) {
    const params = new HttpParams()
      .set('apikey', environment.apiKey)
      .set('i', id);

    return this.http.get<Movie>(environment.apiUrl, {
      params,
    });
  }
}
