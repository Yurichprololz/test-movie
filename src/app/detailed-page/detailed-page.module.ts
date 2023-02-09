import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailedPageRoutingModule } from './detailed-page-routing.module';
import { DetailedPageComponent } from './page/detailed-page/detailed-page.component';


@NgModule({
  declarations: [
    DetailedPageComponent
  ],
  imports: [
    CommonModule,
    DetailedPageRoutingModule
  ]
})
export class DetailedPageModule { }
