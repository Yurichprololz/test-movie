import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartSliderPageRoutingModule } from './start-slider-page-routing.module';
import { StartSliderPageComponent } from './page/start-slider-page/start-slider-page.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [StartSliderPageComponent, HeaderComponent, SliderComponent],
  imports: [CommonModule, StartSliderPageRoutingModule],
  exports: [StartSliderPageComponent],
})
export class StartSliderPageModule {}
