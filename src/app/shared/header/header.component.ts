import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

  showHeader = true;
  showMobileMenu = false;
  private lastScrollTop = 0;
  private scrollThreshold = 5; // Píxeles mínimos para detectar scroll

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Detectar dirección del scroll
    if (Math.abs(scrollTop - this.lastScrollTop) < this.scrollThreshold) {
      return; // Ignorar scrolls muy pequeños
    }

    if (scrollTop > this.lastScrollTop && scrollTop > 100) {
      // Scroll hacia abajo - ocultar header
      this.showHeader = false;
      this.showMobileMenu = false; // Cerrar menú mobile si está abierto
    } else {
      // Scroll hacia arriba - mostrar header
      this.showHeader = true;
    }

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

  toggleMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }


}
