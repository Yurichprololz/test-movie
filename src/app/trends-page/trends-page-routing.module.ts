import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendsPageComponent } from './page/trends-page/trends-page.component';

const routes: Routes = [{
  path: '',
  component: TrendsPageComponent,
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrendsPageRoutingModule { }
