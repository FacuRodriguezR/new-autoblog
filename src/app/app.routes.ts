import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BenefitsComponent } from './pages/benefits/benefits.component';

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
        path: '**',
        redirectTo: '/home'
    }
];
