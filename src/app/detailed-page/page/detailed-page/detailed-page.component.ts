import { Component, OnInit } from '@angular/core';
import { DisableButtonService } from 'src/app/core/services/disable-button.service';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent implements OnInit {
  constructor(private disableButtonService: DisableButtonService) {}

  ngOnInit(): void {
    this.disableButtonService.isDisable(true);
  }
}
