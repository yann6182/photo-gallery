import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { NativeAudio } from '@capacitor-community/native-audio';
import { Subscription } from 'rxjs';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

@Component({
  selector: 'app-lecteur',
  templateUrl: './lecteur.page.html',
  styleUrls: ['./lecteur.page.scss'],
})
export class LecteurPage implements OnDestroy {
  nomChanson: any;
  directoryPath = 'zik_Ing4'; 
  chansons: any[] = [];

  segment = 'artistes';
  chanson: any;
  progression: number = 0;
  lecteurAudio: any = { estEnLecture: false, instance: null };
  subscription: Subscription | any;

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) {
    this.dataService.listSongs().subscribe(async (songs) => {
      this.nomChanson = this.route.snapshot.paramMap.get('titre');
      this.chansons = songs.filter((song: any) => song.titre === this.nomChanson);

      await this.initializeFolders(); 

      const uri = await this.getFilePath(this.chansons[0]?.path, this.chansons[0]?.fileType);
      NativeAudio.preload({
        assetId: this.chansons[0]?.idChanson.toString(),
        assetPath: uri,
        audioChannelNum: 1,
        isUrl: false,
      });
    });
  }

  async initializeFolders() {
    try {
      
      await Filesystem.mkdir({
        path: this.directoryPath,
        directory: Directory.Data, 
        recursive: false,
      });

      
      const categories = ['Benskin', 'Bitkusi', 'Makossa','AfroUrban','RnB']; 
      for (const category of categories) {
        await Filesystem.mkdir({
          path: `${this.directoryPath}/${category}`,
          directory: Directory.Data,
          recursive: false,
        });
      }

      console.log('Structure de dossiers initialisée avec succès.');
    } catch (error) {
      console.error('Erreur lors de initialisation des dossiers :', error);
    }
  }

  async getFilePath(filename: string, fileType: string): Promise<string> {
    const fullPath = `${this.directoryPath}/${filename}`;
    try {
      await Filesystem.writeFile({
        path: fullPath,
        data: filename,
        directory: Directory.Data,
        encoding: Encoding.UTF8,
      });
    } catch (error) {
      console.error('Erreur lors de la création du fichier:', error);
    }
    return `${fullPath}.${fileType}`;
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  toggleLecture() {
    if (!this.lecteurAudio.estEnLecture) {
      NativeAudio.play({ assetId: this.chansons[0]?.idChanson.toString() });
    } else {
      NativeAudio.stop({ assetId: this.chansons[0]?.idChanson.toString() });
    }
    this.lecteurAudio.estEnLecture = !this.lecteurAudio.estEnLecture;
  }

  rembobiner() {
    NativeAudio.stop({ assetId: this.chansons[0]?.idChanson.toString() });
    NativeAudio.play({ assetId: this.chansons[0]?.idChanson.toString() });
    this.lecteurAudio.estEnLecture = true;
  }

  avancer() {
    const indexChansonActuelle = this.chansons.findIndex((chanson) => chanson.titre === this.nomChanson);

    if (indexChansonActuelle < this.chansons.length - 1) {
      const chansonSuivante = this.chansons[indexChansonActuelle + 1];
      this.nomChanson = chansonSuivante.titre;

      NativeAudio.preload({
        assetId: chansonSuivante.idChanson.toString(),
        assetPath: chansonSuivante.path,
        audioChannelNum: 1,
        isUrl: false
      });

      this.chanson = chansonSuivante;

      NativeAudio.stop({ assetId: this.chansons[indexChansonActuelle]?.idChanson.toString() });
      NativeAudio.play({ assetId: chansonSuivante.idChanson.toString() });

      this.lecteurAudio.estEnLecture = true;
    }
  }

  formatDuree(secondes: number): string {
    const minutes = Math.floor(secondes / 60);
    const resteSecondes = secondes % 60;
    return `${minutes}:${resteSecondes < 10 ? '0' : ''}${resteSecondes}`;
  }

  arreter() {
    NativeAudio.stop({ assetId: this.chansons[0]?.idChanson.toString() });
    this.lecteurAudio.estEnLecture = false;
  }
}
