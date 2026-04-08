import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),

    //* withInMemoryScrolling: declarandoló acá al navegar entre componentes, la posicion del scroll va a subir al inicio
    provideRouter(routes, withInMemoryScrolling({
      scrollPositionRestoration: 'enabled'
    })), provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideClientHydration(withEventReplay()),

  ]
};
