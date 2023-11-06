import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-artistes-songs',
  templateUrl: './artistes-songs.page.html',
  styleUrls: ['./artistes-songs.page.scss'],
})
export class ArtistesSongsPage implements OnInit {
  songs:any[]=[];

  constructor(private route : ActivatedRoute, private dataService :DataService, private router : Router) { }

  ngOnInit() {

    const nomArtiste = this.route.snapshot.paramMap.get('nomArtiste');
    this.dataService.listSongs().subscribe(songs => {
      this.songs = songs.filter((song: any) => song.nomArtiste === nomArtiste);
    });
  }

  getChanson(titre:any){
    this.router.navigate(["/tabs/musique/lecteur", titre])    }


}
