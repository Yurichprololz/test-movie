import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, mergeMap, Observable, of } from 'rxjs';
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
        mergeMap((IDs: string[]) =>
          forkJoin(IDs.map((id) => this.getFullInfo(id)))
        )
      );
  }

  getFullInfo(id: string) {
    const params = new HttpParams()
      .set('apikey', environment.apiKey)
      .set('i', id)
      .set('plot', 'full')

    return this.http.get<Movie>(environment.apiUrl, {
      params,
    });
  }

  getMock(): Observable<Movie[]> {
    const obj = {
      Title: 'The Batman ',
      Year: '2022',
      Rated: 'PG-13',
      Released: '04 Mar 2022',
      Runtime: '176 min',
      Genre: 'Action, Crime, Drama',
      Director: 'Matt Reeves',
      Writer: 'Matt Reeves, Peter Craig, Bob Kane',
      Actors: 'Robert Pattinson, Zoë Kravitz, Jeffrey Wright',
      Plot: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
      Language: 'English, Spanish, Latin, Italian',
      Country: 'United States',
      Awards: 'Nominated for 4 BAFTA 19 wins & 115 nominations total',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg',
      Ratings: [
        {
          Source: 'Internet Movie Database',
          Value: '7.8/10',
        },
        {
          Source: 'Rotten Tomatoes',
          Value: '85%',
        },
        {
          Source: 'Metacritic',
          Value: '72/100',
        },
      ],
      Metascore: '72',
      imdbRating: '7.8',
      imdbVotes: '657,733',
      imdbID: 'tt1877830',
      Type: 'movie',
      DVD: '19 Apr 2022',
      BoxOffice: '$369,345,583',
      Production: 'N/A',
      Website: 'N/A',
      Response: 'True',
    };
    const arr = [];

    for (let index = 0; index < 10; index++) {
      arr.push({ ...obj, Title: obj.Title + (index + 1) });
    }
    return of(arr);
  }
}
