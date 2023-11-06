import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusiquePageRoutingModule } from './musique-routing.module';
import { MediaObject, Media } from '@ionic-native/media/ngx';

import { MusiquePage } from './musique.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusiquePageRoutingModule
  ],
  declarations: [MusiquePage],
  providers:[Media]
})
export class MusiquePageModule {}
