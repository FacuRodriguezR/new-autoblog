import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nota } from '../../model/notas-model';
import { AppService } from '../../services/app.service';
import { EventosService } from '../../services/eventos.service';

@Component({
  selector: 'app-event',
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventComponent {

  private route = inject(ActivatedRoute);
  private eventService = inject(EventosService);
  private cdRef = inject(ChangeDetectorRef);

  nota?: Nota;


  ngOnInit() {
    // 1. Escuchamos el parámetro 'slug' de la URL
    const slug = this.route.snapshot.paramMap.get('slug');

    if (slug) {
      // 2. Llamamos al servicio para traer la data
      this.eventService.getNotaBySlug(slug).subscribe({
        next: (data) => {
          this.nota = data;
          console.log(this.nota);
          this.cdRef.markForCheck();
        },
        error: (err) => console.error('Error al traer la nota', err)
      });
    }
  }

}
