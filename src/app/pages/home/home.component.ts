import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CarouselHomeComponent } from '../../shared/carousel-home/carousel-home.component';
import { CarouselNotesComponent } from '../../shared/carousel-notes/carousel-notes.component';
import { CarouselBrandsComponent } from '../../shared/carousel-brands/carousel-brands.component';
import { FormBenefitComponent } from '../../shared/form-benefit/form-benefit.component';




@Component({
  selector: 'app-home',
  imports: [CarouselHomeComponent, CarouselNotesComponent, CarouselBrandsComponent, FormBenefitComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {

  carouselEvents: EventItem[] = [
    {
      title: 'Feria del libro',
      date: '26/11 al 15/12 · 18 a 23h',
      location: 'Mendoza, Argentina',
      image: 'assets/images/carousel/03.Marzo2_F_Pc7 (1).jpg',
    },
    {
      title: 'Rugby Solidario',
      date: '30/11 · 16h',
      location: 'Buenos Aires, Argentina',
      image: 'assets/images/carousel/08.Agosto_Pc7.jpg',
    },
    {
      title: 'Expo Autos',
      date: '15/12 · 10 a 19h',
      location: 'Córdoba, Argentina',
      image: 'assets/images/carousel/Agosto_Pc_010825.jpg',
    },
  ];

  events: EventsCarousel[] = [
    {
      id: '1',
      title: 'Festival de Rock en la Ciudad',
      image: 'https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: '2',
      title: 'Concierto de Jazz Nocturno',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: '3',
      title: 'Electro Beats Summer Party',
      image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: '4',
      title: 'Noche de Música Clásica',
      image: 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80'
    }
  ];
  novedades: EventsCarousel[] = [
    {
      id: 'n1',
      title: 'Lanzamiento de Nuevo Smartphone',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'n2',
      title: 'Estreno de Película en Cines',
      image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'n3',
      title: 'Semana de la Moda Internacional',
      image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'n4',
      title: 'Convención de Videojuegos 2025',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80'
    }
  ];


  colaboradores: BrandsAgreements[] = [
    {
      id: 'n1',
      brand: 'SportClub',
      image: '/assets/images/brands/Sponsors_sportclub.png'
    },
    {
      id: 'n2',
      brand: 'Impsa',
      image: '/assets/images/brands/Sponsors_IMPSA.png'
    },
    {
      id: 'n3',
      brand: 'Osep',
      image: '/assets/images/brands/Sponsors_OSEP.png'
    },
    {
      id: 'Del Puente',
      brand: 'Convención de Videojuegos 2025',
      image: '/assets/images/brands/Sponsors_Delpuente.png'
    }
  ];

}
