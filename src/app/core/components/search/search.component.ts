import { Component } from '@angular/core';
import { APIService } from '../../services/api.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  constructor(private searchService :SearchService, private API: APIService){}
}
