import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nota } from '../../model/notas-model';
import { EventosService } from '../../services/eventos.service';
import { SeoService } from '../../services/seo.service'; // Asegúrate de crearlo o importarlo

@Component({
  selector: 'app-event',
  standalone: true, // Angular 21
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private eventService = inject(EventosService);
  private cdRef = inject(ChangeDetectorRef);
  private seo = inject(SeoService); // Inyectamos el servicio de SEO

  nota?: Nota;

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');

    if (slug) {
      this.eventService.getNotaBySlug(slug).subscribe({
        next: (data) => {
          this.nota = data;

          // --- CONFIGURACIÓN SEO DINÁMICA ---
          if (this.nota) {
            this.seo.setTags(
              this.nota.title,            // El título de tu evento
              this.nota.subtitle,           // Una descripción corta para Google
              this.nota.mainImage    // Imagen para cuando se comparta en redes
            );

            // Opcional: Si quieres la URL canónica
            this.seo.setCanonicalURL(`https://blog.redautoshop.com.ar/event/${slug}`);
          }
          // ----------------------------------

          this.cdRef.markForCheck();
        },
        error: (err) => console.error('Error al traer la nota', err)
      });
    }
  }
}