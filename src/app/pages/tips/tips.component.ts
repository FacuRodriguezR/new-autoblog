import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { EventosService } from '../../services/eventos.service';
import { Nota } from '../../model/notas-model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tips',
  imports: [RouterLink],
  templateUrl: './tips.component.html',
  styleUrl: './tips.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TipsComponent {

  private eventSvc = inject(EventosService);
  private cdRef = inject(ChangeDetectorRef);

  // Definimos tips como un signal de un array de Nota
  tips = signal<Nota[]>([]);

  ngOnInit() {
    this.eventSvc.getTips().subscribe({
      next: (data) => {
        // Usamos .set() para actualizar el valor
        this.tips.set(data);
        console.log('Tips cargados en el signal:', this.tips());
      },
      error: (err) => console.error('Error al cargar tips:', err)
    });
  }

}
