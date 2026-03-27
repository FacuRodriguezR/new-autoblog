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
  private readonly JSONTIP_URL = 'assets/data/tips.json';

  constructor() { }

  getNotas(): Observable<Nota[]> {
    return this.http.get<Nota[]>(this.JSON_URL);
  }

  getNotaBySlug(slug: string): Observable<Nota | undefined> {
    return this.getNotas().pipe(
      map(notas => notas.find(n => n.slug === slug))
    );
  }

  getTips(): Observable<Nota[]> {
    return this.http.get<Nota[]>(this.JSONTIP_URL);
  }

  /** Obtener un tip específico por su slug para la vista de detalle */
  getTipBySlug(slug: string): Observable<Nota | undefined> {
    return this.getTips().pipe(
      map(tips => tips.find(t => t.slug === slug))
    );
  }

  /** Opcional: Obtener los últimos N tips para la Home */
  getLatestTips(limit: number = 6): Observable<Nota[]> {
    return this.getTips().pipe(
      map(tips => tips
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, limit)
      )
    );
  }

}
