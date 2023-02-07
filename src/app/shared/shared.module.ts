import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetImageAsBgDirective } from './directives/set-image-as-bg.directive';

@NgModule({
  declarations: [SetImageAsBgDirective],
  imports: [CommonModule],
  exports: [SetImageAsBgDirective],
})
export class SharedModule {}
