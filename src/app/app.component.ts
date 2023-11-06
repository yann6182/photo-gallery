import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { register } from 'swiper/element/bundle';
import { AcceuilPage } from './acceuil/acceuil.page';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  component = AcceuilPage;

  constructor(private menuController: MenuController) {}

  toggleMenu() {
    this.menuController.toggle('main'); 
  }
}
