import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SongArtistePageRoutingModule } from './song-artiste-routing.module';

import { SongArtistePage } from './song-artiste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SongArtistePageRoutingModule
  ],
  declarations: [SongArtistePage]
})
export class SongArtistePageModule {}
