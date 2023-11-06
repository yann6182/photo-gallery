import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {



  constructor() {}
}






















/* async openDialog() {

const alert = await this.alertController.create(
  { header: 'Alert',
    subHeader: 'Subtitle',
    message: 'This is an alert message.',
    buttons: [{
      text: 'cancel',
      role: 'cancel',
      handler: () => {console.log('voucher closed');}
    },
  {
    text: 'Ok',
    role: 'ok',
    handler: () => {console.log('voucher opened');}
  }]
  });

await alert.present();
const {role}= await alert.onDidDismiss();
console.log(role);

}
<ion-header>
  <ion-toolbar>
    <ion-title>Header</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content>
  <ion-button (click)="openSheet()" expand="block"> Click me </ion-button>
  <ion-card>
    <ion-card-header>
      <ion-card-subtitle>ing4-isi</ion-card-subtitle>
      <ion-card-title>Liste etudiants</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <ion-list>
        <ion-item>
          <ion-label>Tiendjeu</ion-label>
        </ion-item>
        <ion-item>

          <ion-thumbnail>
            <img src="assets/images/OIG.jpeg" alt=""/>
          </ion-thumbnail>
          <ion-label>Ngaleu diouf</ion-label>
        </ion-item>
      </ion-list>

      </ion-card-content>
  </ion-card>
  <ion-grid >
    <ion-row>
      <ion-col size=12 sizeSm=12 sizeMd=9 sizeLg=6 sizeXl=4><p>bonoi</p></ion-col>
      <ion-col size=12 sizeSm=12 sizeMd=9 sizeLg=6 sizeXl=4><p>dsffsdf</p></ion-col>
    </ion-row>
  </ion-grid>
</ion-content>
<ion-footer>
  <ion-toolbar>
    <ion-title>Footer</ion-title>
  </ion-toolbar>
</ion-footer>

  async openSheet(){
    const actionSheet = await this.actionSheetController.create({
      header:'Albums',
      buttons:[{ 
        text: 'Delete', 
        role: 'destructive', 
        icon: 'trash', 
        handler: () => { console.log('Delete clicked'); } 
     }, { 
        text: 'Share', 
        icon: 'share', 
        handler: () => { console.log('Share clicked'); } 
    }
    ]
    });
    await actionSheet.present();
  }
   public actionSheetController: ActionSheetController

*/
