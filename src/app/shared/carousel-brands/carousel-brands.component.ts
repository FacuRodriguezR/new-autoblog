import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carousel-brands',
  imports: [RouterLink],
  templateUrl: './carousel-brands.component.html',
  styleUrl: './carousel-brands.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselBrandsComponent {

  public brands = input<BrandsAgreements[] | undefined>()

  ngOnInit() {
    console.log(this.brands, 'alksd')
  }

}
