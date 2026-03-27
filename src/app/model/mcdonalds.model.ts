export interface McProduct {
    id: number;
    title: string;
    description: string;
    discount: string;
    image: string;
    category: string;
    // Agregamos estas propiedades que usa el HTML:
    highlight?: boolean;
    isCombo?: boolean;      // <--- Agregá esta línea
    accentColor?: string;   // <--- Agregá esta también por las dudas
}