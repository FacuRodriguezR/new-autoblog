import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
  inject,
  DestroyRef,
  PLATFORM_ID // 👈 1. Importar PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common'; // 👈 2. Importar isPlatformBrowser
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../services/app.service';
import { FormBenefitComponent } from '../../shared/form-benefit/form-benefit.component';

const BENEFICIOS_ESTANDAR = [
  { percentage: 50, description: 'Alineación, balanceo y gomería' },
  { percentage: 10, description: 'Lubricentro' },
  { percentage: 10, description: 'Productos de salón (no incluye neumáticos)' },
  { percentage: 5, description: 'En compra de neumáticos (contado)' }
];

@Component({
  selector: 'app-benefits',
  imports: [FormBenefitComponent],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BenefitsComponent implements AfterViewInit {
  private appService = inject(AppService);
  private cdRef = inject(ChangeDetectorRef);
  private route = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);
  private platformId = inject(PLATFORM_ID); // 👈 3. Inyectar PLATFORM_ID

  @ViewChild('bloqueObjetivo', { read: ElementRef }) bloqueObjetivo!: ElementRef;

  sponsors: any[] = [];
  currentSponsor: any;
  beneficios = BENEFICIOS_ESTANDAR;

  ngOnInit() {
    this.getSponsor();
  }

  ngAfterViewInit() {
    // 👈 4. Validar que estemos ejecutando el código en el NAVEGADOR
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.route.queryParams
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(params => {
        if (params['src'] === 'qr') {
          setTimeout(() => {
            // Verificación segura adicional con Optional Chaining
            this.bloqueObjetivo?.nativeElement?.scrollIntoView?.({
              behavior: 'smooth',
              block: 'start'
            });
          }, 100);
        }
      });
  }

  openBenefits(sponsor: any) {
    this.currentSponsor = sponsor;
    if (isPlatformBrowser(this.platformId)) {
      const modal = document.getElementById('benefits_modal') as HTMLDialogElement;
      modal?.showModal();
    }
  }

  getSponsor() {
    this.appService.getSponsors().subscribe(data => {
      this.sponsors = data;
      this.cdRef.markForCheck();
    });
  }
}