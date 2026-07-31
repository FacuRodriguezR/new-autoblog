import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { CarouselHomeComponent } from '../../shared/carousel-home/carousel-home.component';
import { CarouselNotesComponent } from '../../shared/carousel-notes/carousel-notes.component';
import { CarouselBrandsComponent } from '../../shared/carousel-brands/carousel-brands.component';
import { FormBenefitComponent } from '../../shared/form-benefit/form-benefit.component';
import { AppService } from '../../services/app.service';
import { EventosService } from '../../services/eventos.service';
import { RouterLink } from "@angular/router";




@Component({
  selector: 'app-home',
  imports: [CarouselHomeComponent, CarouselNotesComponent, CarouselBrandsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {

  private appService = inject(AppService);
  private eventsService = inject(EventosService);
  private cdRef = inject(ChangeDetectorRef);

  tipoEvent = 'event';
  tipoNovedades = 'tip';

  carouselEvents: EventItem[] = [
    {
      title: '',
      date: '',
      location: 'Mendoza, Argentina',
      image: 'assets/images/carousel/140426_ABlog_pc.webp',
      imageMobile: 'assets/images/carousel/140426_ABlog_mob.webp', // Agregá la ruta de mobile
    },
    {
      title: 'Descuento en Mc Donald´s',
      date: '',
      location: 'La Barraca Mall, Mendoza',
      image: 'assets/images/carousel/010426_nar_pc.webp',
      imageMobile: 'assets/images/carousel/010426_nar_mob.webp',
      link: '/mcdonalds' // Agregá la ruta de mobile
    },

  ];

  events: EventsCarousel[] = [

  ];
  novedades: EventsCarousel[] = [
    // {
    //   id: 'n1',
    //   title: 'Lanzamiento de Nuevo Smartphone',
    //   image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80'
    // },
    // {
    //   id: 'n2',
    //   title: 'Estreno de Película en Cines',
    //   image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1200&q=80'
    // },
    // {
    //   id: 'n3',
    //   title: 'Semana de la Moda Internacional',
    //   image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=80'
    // },
    // {
    //   id: 'n4',
    //   title: 'Convención de Videojuegos 2025',
    //   image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80'
    // }
  ];


  colaboradores: BrandsAgreements[] = [

  ];


  ngOnInit() {
    this.appService.getSponsors().subscribe(
      data => {
        this.colaboradores = data;
        this.cdRef.markForCheck();
      }
    );

    // 2. Carga de Notas y Filtrado para Carruseles
    this.eventsService.getNotas().subscribe(notas => {

      // Filtramos y mapeamos las últimas 6 noticias para "Últimos eventos"
      this.events = notas
        .filter(n => n.category === 'Eventos') // Filtra por categoría
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Orden descendente (más nuevas primero)
        .slice(0, 6) // Toma las primeras 6
        .map(n => ({
          id: n.id,
          slug: n.slug,
          title: n.title,
          image: n.mainImage
        }));

      console.log(this.events)
      // Filtramos y mapeamos para "Novedades" (puedes ajustar el criterio)
      // this.novedades = notas
      //   .filter(n => n.category === 'Tips' || n.category === 'Novedades')
      //   .slice(0, 6)
      //   .map(n => ({
      //     id: n.id,
      //     title: n.title,
      //     image: n.mainImage
      //   }));

      this.cdRef.markForCheck(); // Notificamos a OnPush que hay cambios
    });
    // 4. Carga de Tips y Filtrado para Carruseles
    this.eventsService.getTips().subscribe(notas => {

      // Filtramos y mapeamos las últimas 6 noticias para "Últimos eventos"
      this.novedades = notas
        .filter(n => n.category === 'Tips') // Filtra por categoría
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Orden descendente (más nuevas primero)
        .slice(0, 6) // Toma las primeras 6
        .map(n => ({
          id: n.id,
          slug: n.slug,
          title: n.title,
          image: n.mainImage
        }));

      console.log(this.events)
      // Filtramos y mapeamos para "Novedades" (puedes ajustar el criterio)
      // this.novedades = notas
      //   .filter(n => n.category === 'Tips' || n.category === 'Novedades')
      //   .slice(0, 6)
      //   .map(n => ({
      //     id: n.id,
      //     title: n.title,
      //     image: n.mainImage
      //   }));

      this.cdRef.markForCheck(); // Notificamos a OnPush que hay cambios
    });
  }




}
