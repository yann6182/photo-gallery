import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LecteurPage } from './lecteur.page';

const routes: Routes = [
  {
    path: '',
    component: LecteurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LecteurPageRoutingModule {}
