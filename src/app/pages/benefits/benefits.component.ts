import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { AppService } from '../../services/app.service';

const BENEFICIOS_ESTANDAR = [
  { percentage: 50, description: 'Alineación, balanceo y gomería' },
  { percentage: 10, description: 'Lubricentro' },
  { percentage: 10, description: 'Productos de salón (no incluye neumáticos)' },
  { percentage: 5, description: 'En compra de neumáticos (contado)' }
];

@Component({
  selector: 'app-benefits',
  imports: [],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BenefitsComponent {

  private appService = inject(AppService);
  private cdRef = inject(ChangeDetectorRef);


  sponsors: Sponsors[] = [];

  currentSponsor: any;

  beneficios = BENEFICIOS_ESTANDAR;

  ngOnInit() {
    this.getSponsor();
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
    )
  }


}
