import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  listCategories(): Observable<any> {
    return this.http.get('assets/categories.json');
  }

  listSongs(): Observable<any> {
    return this.http.get('assets/songs.json');
  }

  
}
