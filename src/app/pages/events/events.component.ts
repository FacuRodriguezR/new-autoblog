import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { EventosService } from '../../services/eventos.service';
import { Nota } from '../../model/notas-model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-events',
  imports: [RouterLink],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsComponent {

  private eventsService = inject(EventosService);
  private cdRef = inject(ChangeDetectorRef);

  notas: Nota[] = [];

  ngOnInit() {
    this.eventsService.getNotas().subscribe({
      next: (data) => {
        console.log(data);
        this.notas = data;
        this.cdRef.markForCheck();
      },
      error: (err) => console.error('Error al cargar eventos', err)
    });
  }

}
