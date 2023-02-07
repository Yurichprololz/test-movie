import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartSliderPageModule } from './start-slider-page/start-slider-page.module';
import { TrendsPageComponent } from './trends-page/page/trends-page/trends-page.component';
import { TrendsPageModule } from './trends-page/trends-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StartSliderPageModule,
    TrendsPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
