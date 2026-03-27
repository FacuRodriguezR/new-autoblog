import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { McProduct } from '../model/mcdonalds.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private http = inject(HttpClient);

  constructor() { }

  getSponsors(): Observable<any> {
    return this.http.get('/assets/data/sponsors.json');
  }


  getMcDonalds(): Observable<McProduct[]> {
    return this.http.get<McProduct[]>('assets/data/mcdonalds.json');
  }

}
