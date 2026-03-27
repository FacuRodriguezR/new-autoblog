import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject, OnInit, ChangeDetectorRef } from '@angular/core'; // Añadimos ChangeDetectorRef
import { McProduct } from '../../model/mcdonalds.model';
import { AppService } from '../../services/app.service';
import { CommonModule } from '@angular/common'; // IMPORTANTE

@Component({
  selector: 'app-mcdonalds',
  standalone: true, // Asegurate de que sea standalone
  imports: [CommonModule], // Añadí CommonModule para las directivas de clase
  templateUrl: './mcdonalds.component.html',
  styleUrl: './mcdonalds.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class McdonaldsComponent implements OnInit {

  private appService = inject(AppService);
  private cdr = inject(ChangeDetectorRef); // Inyectamos el detector de cambios

  mcProducts: McProduct[] = []

  ngOnInit() {
    this.appService.getMcDonalds().subscribe({
      next: data => {
        this.mcProducts = data;
        this.cdr.markForCheck(); // Obligamos a OnPush a renderizar los datos nuevos
      }
    });
  }
}