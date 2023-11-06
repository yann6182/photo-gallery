import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-musique',
  templateUrl: './musique.page.html',
  styleUrls: ['./musique.page.scss'],
})
export class MusiquePage implements OnInit {
 Artistes:any[]=[];
 albums: any[]=[];   
 chansons: any[]=[];
  segment = 'artistes';
  constructor(private dataService : DataService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.dataService.listSongs().subscribe((artiste) => {
      this.Artistes = artiste;
    });
  }

  segmentChanged(event: Event) {

    if (event instanceof CustomEvent) {
      this.segment = (event.detail as any).value;    }
     }

     musiqueplay(songs: any) {
      if (songs && songs.idCategorie) {
        this.router.navigate(["/tabs/musique/player", songs.idChanson]);
      } else {
        console.error("");
      }
    }

    getChanson(titre:any){
      this.router.navigate(["/tabs/acceuil/lecteur", titre])    }

      search(event: any) {
        
      }

      songArtist(Artist : any){
        this.router.navigate(["/tabs/musique/artistes-songs", Artist.nomArtiste]);
  
      }

      songAlbum(album : any){
        this.router.navigate(["/tabs/musique/albums-songs", album.album.nomAlbum]);
  
      }

}
