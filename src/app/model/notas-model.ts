export interface ContentBlock {
    type: 'paragraph' | 'heading' | 'image' | 'list' | 'video';
    text?: string;
    url?: string;
    caption?: string;
    items?: string[]; // Para el bloque tipo 'list'
}

export interface Nota {
    id: string;
    slug: string;
    category: 'Eventos' | 'Tips';
    title: string;
    subtitle: string;
    mainImage: string;
    date: string;
    contentBlocks: ContentBlock[];
}

// Interfaz simplificada para los carruseles de la Home
export interface EventsCarousel {
    id: string;
    slug: string;
    title: string;
    image: string;
}