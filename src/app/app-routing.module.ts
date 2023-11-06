import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AproposPage } from './apropos/apropos.page';
import { AcceuilPage } from './acceuil/acceuil.page';
import { TabsPage } from './tabs/tabs.page';
import { MusiquePage } from './musique/musique.page';
import { SongArtistePage } from './song-artiste/song-artiste.page';
import { DetailCategoriePage } from './detail-categorie/detail-categorie.page';
import { LecteurPage } from './lecteur/lecteur.page';
import { ArtistesSongsPage } from './artistes-songs/artistes-songs.page';
import { AlbumsSongsPage } from './albums-songs/albums-songs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'accueil',
        children: [
          {
            path: '',
            component: AcceuilPage,
          },
        ],
      },
      {
        path: 'acceuil/song-artiste/:nomArtiste',
        children: [
          {
            path: '',
            component: SongArtistePage,
          },
        ],
      },
      {
        path: 'acceuil/detail-categorie/:id',
        children: [
          {
            path: '',
            component: DetailCategoriePage,
          },
        ],
      },
      {
        path: 'musique',
        children: [
          {
            path: '',
            component: MusiquePage,
          },
        ],
      },
      {
        path: 'lecteur',
        children: [
          {
            path: '',
            component: LecteurPage,
          },
        ],
      },
      {
        path: 'acceuil/lecteur/:titre',
        children: [
          {
            path: '',
            component: LecteurPage,
          },
        ],
      },
      {
        path: 'musique/lecteur/:titre',
        children: [
          {
            path: '',
            component: LecteurPage,
          },
        ],
      },
      {
        path: 'musique/artistes-songs/:nomArtiste',
        children: [
          {
            path: '',
            component: ArtistesSongsPage,
          },
        ],
      },
      {
        path: 'musique/albums-songs/:nomAlbum',
        children: [
          {
            path: '',
            component: AlbumsSongsPage,
          },
        ],
      },

      {
        path: 'apropos',
        children: [
          {
            path: '',
            component: AproposPage,
          },
        ],
      },

      {
        path: '',
        redirectTo: '/tabs/accueil',
        pathMatch: 'full',
      },
    ],
  },

  {
    path: '',
    redirectTo: '/tabs/accueil',
    pathMatch: 'full',
  },
  {
    path: 'detail-categorie',
    loadChildren: () => import('./detail-categorie/detail-categorie.module').then( m => m.DetailCategoriePageModule)
  },
  {
    path: 'lecteur',
    loadChildren: () => import('./lecteur/lecteur.module').then( m => m.LecteurPageModule)
  },
  {
    path: 'albums-songs',
    loadChildren: () => import('./albums-songs/albums-songs.module').then( m => m.AlbumsSongsPageModule)
  },
  {
    path: 'artistes-songs',
    loadChildren: () => import('./artistes-songs/artistes-songs.module').then( m => m.ArtistesSongsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
