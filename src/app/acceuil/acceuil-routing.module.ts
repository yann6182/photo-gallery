import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceuilPage } from './acceuil.page';

const routes: Routes = [
  {
    path: '',
    component: AcceuilPage
  },
  {
    path: 'song-artiste/:nomArtiste',
    loadChildren: () => import('../song-artiste/song-artiste.module').then(m => m.SongArtistePageModule),
  },
  {
    path: 'lecteur/:titre',
    loadChildren: () => import('../lecteur/lecteur.module').then( m => m.LecteurPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcceuilPageRoutingModule {}
