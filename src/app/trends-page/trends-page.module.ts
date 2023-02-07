import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrendsPageRoutingModule } from './trends-page-routing.module';
import { TrendsPageComponent } from './page/trends-page/trends-page.component';
import { TrendsCardComponent } from './components/trends-card/trends-card.component';

@NgModule({
  declarations: [TrendsPageComponent, TrendsCardComponent],
  imports: [CommonModule, TrendsPageRoutingModule],
  exports: [TrendsPageComponent],
})
export class TrendsPageModule {}
