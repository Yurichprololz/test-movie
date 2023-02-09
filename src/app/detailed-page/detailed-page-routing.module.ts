import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedPageComponent } from './page/detailed-page/detailed-page.component';

const routes: Routes = [{ path: ':id', component: DetailedPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailedPageRoutingModule {}
