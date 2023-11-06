import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-song-artiste',
  templateUrl: './song-artiste.page.html',
  styleUrls: ['./song-artiste.page.scss'],
})
export class SongArtistePage implements OnInit {

  songs:any[]=[];

  constructor(private dataService: DataService,private route:ActivatedRoute, private router : Router) { }

  ngOnInit() {
    const nomArtiste = this.route.snapshot.paramMap.get('nomArtiste');
    this.dataService.listSongs().subscribe(songs => {
      this.songs = songs.filter((song: any) => song.nomArtiste === nomArtiste);
    });
  }
  getChanson(titre:any){
    this.router.navigate(["/tabs/acceuil/lecteur", titre])    }


}
