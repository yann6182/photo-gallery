import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumsSongsPage } from './albums-songs.page';

const routes: Routes = [
  {
    path: '',
    component: AlbumsSongsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumsSongsPageRoutingModule {}
