import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BenefitsComponent } from './pages/benefits/benefits.component';
import { EventsComponent } from './pages/events/events.component';
import { EventComponent } from './pages/event/event.component';
import { McdonaldsComponent } from './pages/mcdonalds/mcdonalds.component';
import { TipsComponent } from './pages/tips/tips.component';
import { TipComponent } from './pages/tip/tip.component';

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
        path: 'tips',
        component: TipsComponent
    },
    {
        path: 'tip/:slug',
        component: TipComponent
    },

    {
        path: 'mcdonalds',
        component: McdonaldsComponent
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];
