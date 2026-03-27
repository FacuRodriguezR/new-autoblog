import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
    dom: any;
    constructor(private title: Title, private meta: Meta) { }

    setTags(title: string, description: string, image?: string) {
        this.title.setTitle(`${title} | TuSitio`);
        this.meta.updateTag({ name: 'description', content: description });

        // Open Graph para que al compartir el link en Mendoza (o donde sea) se vea bien
        this.meta.updateTag({ property: 'og:title', content: title });
        this.meta.updateTag({ property: 'og:description', content: description });
        if (image) this.meta.updateTag({ property: 'og:image', content: image });
    }

    setCanonicalURL(url?: string) {
        const canUrl = url ? url : this.dom.URL;
        let link: HTMLLinkElement = this.dom.querySelector('link[rel="canonical"]') || this.dom.createElement('link');
        link.setAttribute('rel', 'canonical');
        this.dom.head.appendChild(link);
        link.setAttribute('href', canUrl);
    }
}