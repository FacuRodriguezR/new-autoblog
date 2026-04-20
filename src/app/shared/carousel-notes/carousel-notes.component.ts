import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  input,
  OnDestroy,
  OnInit,
  viewChild
} from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-carousel-notes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './carousel-notes.component.html',
  styleUrl: './carousel-notes.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselNotesComponent implements OnInit, OnDestroy {

  // Inputs usando Signals
  public notesCarousel = input<any[] | undefined>();
  public tipoCarousel = input<string | undefined>();

  // Referencia al contenedor de scroll (#container en el HTML)
  private scrollContainer = viewChild<ElementRef<HTMLDivElement>>('container');

  private intervalId: any;

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  /**
   * Mueve el carrusel manualmente mediante las flechas
   */
  public scroll(direction: 'left' | 'right'): void {
    const container = this.scrollContainer()?.nativeElement;
    if (!container) return;

    // Calculamos cuánto scrollear (un 80% del ancho visible)
    const scrollAmount = container.offsetWidth * 0.8;

    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  }

  /**
   * Inicia el movimiento automático cada 5 segundos
   */
  public startAutoPlay(): void {
    // Evitamos duplicar intervalos
    if (this.intervalId) return;

    this.intervalId = setInterval(() => {
      const container = this.scrollContainer()?.nativeElement;
      if (!container) return;

      // Si llegamos al final, volvemos al principio
      const isEnd = container.scrollLeft + container.offsetWidth >= container.scrollWidth - 10;

      if (isEnd) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: container.offsetWidth * 0.5, behavior: 'smooth' });
      }
    }, 5000);
  }

  /**
   * Detiene el movimiento automático
   */
  public stopAutoPlay(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}