import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BenefitsComponent } from './pages/benefits/benefits.component';
import { EventsComponent } from './pages/events/events.component';
import { EventComponent } from './pages/event/event.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'benefits',
        component: BenefitsComponent
    },
    {
        path: 'events',
        component: EventsComponent
    },
    {
        path: 'event/:slug',
        component: EventComponent
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];
