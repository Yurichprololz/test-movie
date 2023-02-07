import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartSliderPageModule } from './start-slider-page/start-slider-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, StartSliderPageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
