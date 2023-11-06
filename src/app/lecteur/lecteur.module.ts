import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LecteurPageRoutingModule } from './lecteur-routing.module';

import { LecteurPage } from './lecteur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LecteurPageRoutingModule
  ],
  declarations: [LecteurPage]
})
export class LecteurPageModule {}
