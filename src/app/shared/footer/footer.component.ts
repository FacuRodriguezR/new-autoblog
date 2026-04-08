import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityGroup } from '../../model/footer.model';
import { RouterLink } from "@angular/router";
import { Router } from 'express';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  readonly locationGroups: CityGroup[] = [
    {
      city: 'MENDOZA',
      branches: [
        {
          name: 'Casa central',
          address: 'Diamante 371 - Godoy Cruz',
          phones: ['261 205-2000', '261 556-9200'],
          schedule: 'Lunes a Viernes de 09:00h a 18:00h. Sábados de 10:00h a 13:00h',
          link: 'https://maps.app.goo.gl/H1C1kcp5Z4EeaeJGA'
        },
        {
          name: 'San Martin Sur',
          address: 'Av. San Martín Sur 901 - Godoy Cruz',
          phones: ['261 248-0424'],
          schedule: 'Lunes a Viernes de 09:00h a 18:00h. Sábados de 09:00h a 13:00h',
          isNew: true,
          link: 'https://maps.app.goo.gl/2gBESYcPKQZSMopT7'
        }
      ]
    },
    {
      city: 'CAPITAL FEDERAL',
      branches: [
        {
          name: 'Balvanera',
          address: 'Av. Belgrano 2959 esq. Dean Funes',
          phones: ['011 5771-2488', '011 6238-6430'],
          schedule: 'Lunes a Viernes de 09:00h a 18:00h. Sábados de 09:00h a 13:00h',
          link: 'https://maps.app.goo.gl/yDcfKq6yu4MgDNzm8'
        },
        {
          name: 'Constitución',
          address: 'Av. Juan de Garay 1799 esq. Entre Ríos',
          phones: ['011 3228-1425'],
          schedule: 'Lunes a Viernes de 09:00h a 18:00h. Sábados de 09:00h a 13:00h',
          link: 'https://maps.app.goo.gl/d23JPLjDkATEN9en8'
        }
      ]
    },
    {
      city: 'NEUQUÉN',
      branches: [
        {
          name: 'Neuquén',
          address: 'Eugenio Perticone 1137',
          phones: ['0299 512-7189'],
          schedule: 'Lunes a Viernes de 09:00h a 18:00h. Sábados de 09:00h a 13:00h',
          link: 'https://maps.app.goo.gl/1uaGcRhBPDqQVTk19'
        }
      ]
    }
  ];
  readonly quickLinks = [
    {
      item: 'Consejos útiles',
      link: 'tips'
    },
    {
      item: 'Eventos',
      link: 'events'
    },
    {
      item: 'Novedades',
      link: 'mcdonalds'
    },
    {
      item: 'Promociones y beneficios',
      link: 'benefits'
    },



  ];
}