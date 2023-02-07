import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrendsPageRoutingModule } from './trends-page-routing.module';
import { TrendsPageComponent } from './page/trends-page/trends-page.component';
import { TrendsCardComponent } from './components/trends-card/trends-card.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TrendsPageComponent, TrendsCardComponent],
  imports: [CommonModule, TrendsPageRoutingModule, SharedModule],
  exports: [TrendsPageComponent],
})
export class TrendsPageModule {}
