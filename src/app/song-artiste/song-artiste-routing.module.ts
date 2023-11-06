import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SongArtistePage } from './song-artiste.page';

const routes: Routes = [
  {
    path: ':nomArtiste',
    component: SongArtistePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SongArtistePageRoutingModule {}
