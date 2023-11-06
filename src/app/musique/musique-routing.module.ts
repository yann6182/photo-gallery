import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusiquePage } from './musique.page';

const routes: Routes = [
  {
    path: '',
    component: MusiquePage
  },
  {
    path: 'artistes-songs/:nomArtiste',
    loadChildren: () => import('../artistes-songs/artistes-songs.module').then(m => m.ArtistesSongsPageModule)
  },
  {
    path: 'albums-songs/:nomAlbum',
    loadChildren: () => import('../albums-songs/albums-songs.module').then(m => m.AlbumsSongsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusiquePageRoutingModule {}
