import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistesSongsPage } from './artistes-songs.page';

const routes: Routes = [
  {
    path: '',
    component: ArtistesSongsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistesSongsPageRoutingModule {}
