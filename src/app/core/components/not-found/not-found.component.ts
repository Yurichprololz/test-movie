import { Component, OnInit } from '@angular/core';
import { DisableButtonService } from '../../services/disable-button.service';
import { NavigateService } from '../../services/navigate.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  constructor(private navigate: NavigateService, private disableButtonService: DisableButtonService) {}

  ngOnInit() {
    this.disableButtonService.isDisable(true)
  }

  goHome() {
    this.navigate.goHome();
  }
}
