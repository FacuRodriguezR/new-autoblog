interface EventItem {
    title: string;
    date: string;
    location: string;
    image: string;       // Imagen para Desktop
    imageMobile: string; // Nueva: Imagen para Mobile
}

interface EventsCarousel {
    id: string,
    slug: string,
    title: string,
    image: string,

}
interface BrandsAgreements {
    id: number,
    brand: string,
    image: string,

}

interface Sponsors {
    id: number,
    brand: string,
    image: string
}