import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtistesSongsPageRoutingModule } from './artistes-songs-routing.module';

import { ArtistesSongsPage } from './artistes-songs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtistesSongsPageRoutingModule
  ],
  declarations: [ArtistesSongsPage]
})
export class ArtistesSongsPageModule {}
