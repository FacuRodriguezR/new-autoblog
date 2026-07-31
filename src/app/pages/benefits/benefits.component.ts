import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
  inject
} from '@angular/core';
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


  @ViewChild('bloqueObjetivo', { read: ElementRef }) bloqueObjetivo!: ElementRef;

  sponsors: any[] = [];
  currentSponsor: any;
  beneficios = BENEFICIOS_ESTANDAR;

  private isFromQr = false;

  ngOnInit() {
    this.getSponsor();


    this.route.queryParams.subscribe(params => {
      if (params['src'] === 'qr') {
        this.isFromQr = true;
      }
    });
  }

  ngAfterViewInit() {
    if (this.isFromQr && this.bloqueObjetivo?.nativeElement) {
      setTimeout(() => {

        this.bloqueObjetivo.nativeElement?.scrollIntoView?.({
          behavior: 'smooth',
          block: 'start'
        });
      }, 300);
    }
  }

  openBenefits(sponsor: any) {
    this.currentSponsor = sponsor;
    const modal = document.getElementById('benefits_modal') as HTMLDialogElement;
    modal?.showModal();
  }

  getSponsor() {
    this.appService.getSponsors().subscribe(
      data => {
        this.sponsors = data;
        console.log(this.sponsors);
        this.cdRef.markForCheck();
      }
    );
  }
}