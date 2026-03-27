import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nota } from '../../model/notas-model';
import { EventosService } from '../../services/eventos.service';
import { SafePipe } from '../../pipe/safe.pipe';

@Component({
  selector: 'app-tip',
  imports: [SafePipe],
  templateUrl: './tip.component.html',
  styleUrl: './tip.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TipComponent {

  private route = inject(ActivatedRoute);
  private eventService = inject(EventosService);
  private cdRef = inject(ChangeDetectorRef);

  nota?: Nota;


  ngOnInit() {
    // 1. Escuchamos el parámetro 'slug' de la URL
    const slug = this.route.snapshot.paramMap.get('slug');

    if (slug) {
      // 2. Llamamos al servicio para traer la data
      this.eventService.getTipBySlug(slug).subscribe({
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
