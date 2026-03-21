export interface ContentBlock {
    type: 'paragraph' | 'heading' | 'image' | 'list' | 'video';
    text?: string;
    url?: string;
    caption?: string;
    items?: string[];
}

export interface Nota {
    id: string;
    slug: string;
    category: string;
    title: string;
    subtitle: string;
    mainImage: string;
    date: string;
    contentBlocks: ContentBlock[];
}