import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'accueil',
        loadChildren: () => import('../acceuil/acceuil.module').then(m => m.AcceuilPageModule)
      },
      {
        path: 'song-artiste/:nomArtiste',
        loadChildren: () => import('../song-artiste/song-artiste.module').then(m => m.SongArtistePageModule)
      },
      {
        path: 'detail-categorie/:id',
        loadChildren: () => import('../musique/musique.module').then(m => m.MusiquePageModule)
      },
      {
        path: 'musique',
        loadChildren: () => import('../musique/musique.module').then(m => m.MusiquePageModule)
      },
      {
        path: 'artistes-songs/:nomArtiste',
        loadChildren: () => import('../artistes-songs/artistes-songs.module').then(m => m.ArtistesSongsPageModule)
      },
      {
        path: 'albums-songs/:nomAlbum',
        loadChildren: () => import('../albums-songs/albums-songs.module').then(m => m.AlbumsSongsPageModule)
      },
      {
        path: 'apropos',
        loadChildren: () => import('../apropos/apropos.module').then(m => m.AproposPageModule)
      },
      {
        path: 'lecteur/:titre',
        loadChildren: () => import('../lecteur/lecteur.module').then( m => m.LecteurPageModule)
      },
      {
        path: 'lecteur',
        loadChildren: () => import('../lecteur/lecteur.module').then( m => m.LecteurPageModule)
      },
      
      
      {
        path: '',
        redirectTo: '/tabs/accueil',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
