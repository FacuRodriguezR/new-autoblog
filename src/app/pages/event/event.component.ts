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
    // En lugar de snapshot, nos suscribimos al cambio de parámetros
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');

      if (slug) {
        // Opcional: limpiar la nota actual para que se vea el "Cargando" al cambiar
        this.nota = undefined;
        this.cdRef.markForCheck();

        this.eventService.getNotaBySlug(slug).subscribe({
          next: (data) => {
            this.nota = data;

            // --- CONFIGURACIÓN SEO DINÁMICA ---
            if (this.nota) {
              this.seo.setTags(
                this.nota.title,
                this.nota.subtitle,
                this.nota.mainImage
              );
              this.seo.setCanonicalURL(`https://blog.redautoshop.com.ar/event/${slug}`);
            }

            this.cdRef.markForCheck(); // Avisar a Angular que hay datos nuevos
          },
          error: (err) => {
            console.error('Error al traer la nota', err);
            // Podrías redirigir a home si no existe la nota
          }
        });
      }
    });
  }
}