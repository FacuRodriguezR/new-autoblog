import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private cdr = inject(ChangeDetectorRef);

  showHeader = true;
  showMobileMenu = false;
  private lastScrollTop = 0;
  private scrollThreshold = 5;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (Math.abs(scrollTop - this.lastScrollTop) < this.scrollThreshold) {
      return;
    }

    if (scrollTop > this.lastScrollTop && scrollTop > 100) {
      this.showHeader = false;
      this.showMobileMenu = false;
    } else {
      this.showHeader = true;
    }

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    this.cdr.markForCheck();
  }

  toggleMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  closeMenu() {
    this.showMobileMenu = false;
  }
}