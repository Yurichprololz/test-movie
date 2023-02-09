import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscribable, Subscription } from 'rxjs';
import { DisableButtonService } from '../../services/disable-button.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  isDisabled: boolean = false;
  subs!: Subscription;

  constructor(private disableButtonService: DisableButtonService) {}

  ngOnInit(): void {
    this.subs = this.disableButtonService.subject.subscribe(
      (value) => (this.isDisabled = value)
    );
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
