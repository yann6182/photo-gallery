import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-categorie',
  templateUrl: './detail-categorie.page.html',
  styleUrls: ['./detail-categorie.page.scss'],
})
export class DetailCategoriePage implements OnInit {
  categories:any[]=[];
  Songcat:any[]=[];
  idCat:any|any;

  constructor(private dataservice:DataService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    
    this.dataservice.listSongs().subscribe((reponse :any)=>{
      this.idCat = this.route.snapshot.paramMap.get('id');
      console.log(reponse);
      console.log(this.idCat);
      
      
     this.Songcat=reponse.filter((songcat:any)=> songcat.idCategorie==this.idCat)
   })
    

  }
  getChanson(titre:any){
    this.router.navigate(["/tabs/acceuil/lecteur", titre])    }

}
