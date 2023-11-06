import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlbumsSongsPageRoutingModule } from './albums-songs-routing.module';

import { AlbumsSongsPage } from './albums-songs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlbumsSongsPageRoutingModule
  ],
  declarations: [AlbumsSongsPage]
})
export class AlbumsSongsPageModule {}
