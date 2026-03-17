import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CarouselService {

    http = inject(HttpClient);

    getImages(): Observable<any> {
        return this.http.get<any>("assets/data/img.json")
    }

}