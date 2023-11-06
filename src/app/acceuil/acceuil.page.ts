import { Component,OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Network } from'@capacitor/network';
import { DataService } from '../data.service';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IonicSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  
  selector: 'app-acceuil',
  templateUrl: './acceuil.page.html',
  styleUrls: ['./acceuil.page.scss'],
})
export class AcceuilPage implements OnInit {
  categories: any[] = [];
  songs:any[]=[];
  topArtists: any[] = [];
  swiperModules = [IonicSlides];
  


  constructor(private dataService: DataService, private router:Router, 
  ) { }

    ngOnInit() {
      this.dataService.listCategories().subscribe((categories) => {
        this.categories = categories;
      });

      this.dataService.listSongs().subscribe(songs => {
        this.songs = songs.filter((song: any) => song.estFavoris);
      });

      this.dataService.listSongs().subscribe((songs) => {
        this.topArtists = songs.filter((song:any) => song.score > 7)
      });
      
      
    }

    songArtist(Artist : any){
      this.router.navigate(["/tabs/acceuil/song-artiste", Artist.nomArtiste]);

    }

     songcat(songs: any) {
      if (songs && songs.idCategorie) {
        this.router.navigate(["/tabs/acceuil/detail-categorie", songs.idCategorie]);
      } else {
        console.error("ID de catégorie non défini");
      }

  
    }
    
 
    getChanson(titre:any){
      this.router.navigate(["/tabs/acceuil/lecteur", titre])    }
  


}