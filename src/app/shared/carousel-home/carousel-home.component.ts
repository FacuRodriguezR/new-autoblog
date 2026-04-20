import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, Input, input, signal, ViewChild } from '@angular/core';

import { CarouselService } from '../../services/carousel.service';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-carousel-home',
  imports: [CommonModule],
  templateUrl: './carousel-home.component.html',
  styleUrl: './carousel-home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CarouselHomeComponent {
  events: EventItem[] = [

  ];

  eventsInput = input<EventItem[]>([])

  currentIndex = signal(0);
  remainingSeconds = signal(5);
  progress = signal(0);

  private autoplayInterval: any;
  private countdownInterval: any;
  private progressInterval: any;
  private readonly AUTOPLAY_DELAY = 5000; // 5 segundos

  ngOnInit() {
    this.startAutoplay();

  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  startAutoplay() {
    this.remainingSeconds.set(5);
    this.progress.set(0);

    // Contador de segundos
    this.countdownInterval = setInterval(() => {
      const current = this.remainingSeconds();
      if (current > 1) {
        this.remainingSeconds.set(current - 1);
      } else {
        this.remainingSeconds.set(5);
      }
    }, 1000);

    // Barra de progreso (actualización más suave cada 50ms)
    this.progressInterval = setInterval(() => {
      const current = this.progress();
      if (current < 100) {
        this.progress.set(current + (100 / (this.AUTOPLAY_DELAY / 50)));
      }
    }, 50);

    // Autoplay
    this.autoplayInterval = setInterval(() => {
      this.next();
    }, this.AUTOPLAY_DELAY);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
    }
  }

  next() {
    const nextIndex = (this.currentIndex() + 1) % this.eventsInput().length;
    this.currentIndex.set(nextIndex);
    this.resetAutoplay();
  }

  prev() {
    const prevIndex = this.currentIndex() === 0
      ? this.eventsInput().length - 1
      : this.currentIndex() - 1;
    this.currentIndex.set(prevIndex);
    this.resetAutoplay();
  }

  goToSlide(index: number) {
    this.currentIndex.set(index);
    this.resetAutoplay();
  }


  resetAutoplay() {
    this.stopAutoplay();
    this.startAutoplay();
  }
}
