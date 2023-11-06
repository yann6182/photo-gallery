import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-albums-songs',
  templateUrl: './albums-songs.page.html',
  styleUrls: ['./albums-songs.page.scss'],
})
export class AlbumsSongsPage implements OnInit {
  songs:any[]=[];

  constructor(private route : ActivatedRoute, private dataService :DataService, private router : Router) { }

  ngOnInit() {
     const nomAlbum = this.route.snapshot.paramMap.get('nomAlbum');
     this.dataService.listSongs().subscribe(songs => {
        this.songs = songs.filter((song: any) => song.album.nomAlbum === nomAlbum);
  });

}

getChanson(titre:any){
  this.router.navigate(["/tabs/musique/lecteur", titre])    }
}
