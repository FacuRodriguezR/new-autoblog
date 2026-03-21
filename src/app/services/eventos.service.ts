import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Nota } from '../model/notas-model';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private http = inject(HttpClient);
  private readonly JSON_URL = 'assets/data/events.json';

  constructor() { }

  getNotas(): Observable<Nota[]> {
    return this.http.get<Nota[]>(this.JSON_URL);
  }

  getNotaBySlug(slug: string): Observable<Nota | undefined> {
    return this.getNotas().pipe(
      map(notas => notas.find(n => n.slug === slug))
    );
  }

}
