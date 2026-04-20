import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class SeoService {
    // Inyectamos DOCUMENT y los servicios nativos de Angular para Meta y Title
    constructor(
        @Inject(DOCUMENT) private document: Document,
        private meta: Meta,
        private title: Title
    ) { }

    setTags(title: string, description: string, image: string) {
        this.title.setTitle(title);
        this.meta.updateTag({ name: 'description', content: description });

        // Meta etiquetas para Redes Sociales (Open Graph)
        this.meta.updateTag({ property: 'og:title', content: title });
        this.meta.updateTag({ property: 'og:description', content: description });
        this.meta.updateTag({ property: 'og:image', content: image });
    }

    setCanonicalURL(url: string) {
        // Buscamos la etiqueta existente de forma segura
        let link: HTMLLinkElement | null = this.document.head.querySelector('link[rel="canonical"]');

        // Si no existe, la creamos y la añadimos al <head>
        if (!link) {
            link = this.document.createElement('link');
            link.setAttribute('rel', 'canonical');
            this.document.head.appendChild(link);
        }

        // Ahora que estamos seguros de que existe, seteamos el href
        link.setAttribute('href', url);
    }
}