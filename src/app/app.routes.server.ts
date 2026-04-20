import { RenderMode, ServerRoute } from '@angular/ssr';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'event/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      // Intentamos ambas rutas comunes por seguridad
      const paths = [
        join(process.cwd(), 'public/assets/data/events.json'),
        join(process.cwd(), 'src/assets/data/events.json')
      ];

      const filePath = paths.find(p => existsSync(p));

      if (!filePath) {
        console.error('❌ No se encontró events.json en ninguna de las rutas esperadas.');
        return [];
      }

      const fileContent = readFileSync(filePath, 'utf8');
      const events = JSON.parse(fileContent);
      return events.map((event: any) => ({ slug: event.slug }));
    },
  },
  {
    path: 'tip/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const paths = [
        join(process.cwd(), 'public/assets/data/tips.json'),
        join(process.cwd(), 'src/assets/data/tips.json')
      ];

      const filePath = paths.find(p => existsSync(p));

      if (!filePath) {
        console.error('❌ No se encontró tips.json en ninguna de las rutas esperadas.');
        return [];
      }

      const fileContent = readFileSync(filePath, 'utf8');
      const tips = JSON.parse(fileContent);
      return tips.map((tip: any) => ({ slug: tip.slug }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];