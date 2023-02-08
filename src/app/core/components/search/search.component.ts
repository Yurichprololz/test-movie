import { Component } from '@angular/core';
import { catchError, debounceTime, distinctUntilChanged, EMPTY, filter, fromEvent, map, switchMap, tap } from 'rxjs';
import { APIService } from '../../services/api.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {}
