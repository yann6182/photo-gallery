import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcceuilPageRoutingModule } from './acceuil-routing.module';

import { AcceuilPage } from './acceuil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcceuilPageRoutingModule
  ],
  declarations: [AcceuilPage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AcceuilPageModule {}
