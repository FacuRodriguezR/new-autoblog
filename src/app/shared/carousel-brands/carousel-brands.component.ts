import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-carousel-brands',
  imports: [],
  templateUrl: './carousel-brands.component.html',
  styleUrl: './carousel-brands.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselBrandsComponent {

  public brands = input<BrandsAgreements[] | undefined>()


}
