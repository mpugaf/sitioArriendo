export interface PropertyImage {
  id: string;
  cloudinaryPublicId: string;
  alt: string;
  description: string;
  isHero: boolean;
}

export interface Property {
  title: string;
  subtitle: string;
  description: string;
  sqm: number;
  bedrooms: number;
  bathrooms: number;
  storage: boolean;
  parking: boolean;
  location: string;
  address: string;
  monthlyRent: number;    // interno, no se muestra en el sitio
  commonExpenses: number; // interno, no se muestra en el sitio
}

export const property: Property = {
  title: 'Departamento con terraza en General Jofré',
  subtitle: 'Terraza privada de 35 m² con vista al Cerro San Cristóbal, a pasos del Metro Parque Bustamante',
  description:
    'Departamento de 1 dormitorio distribuido en 2 ambientes, con el living y el dormitorio en espacios independientes, ' +
    'en el límite entre Santiago Centro y Providencia. ' +
    'Su gran atractivo es una terraza privada de 35 m² — más extensa que el propio interior — ' +
    'con vista despejada al Cerro San Cristóbal y al entorno arborizado del sector. ' +
    'Cuenta con cocina equipada, living-comedor con salida directa al exterior, dormitorio y baño completo. ' +
    'Incluye bodega. ' +
    'A menos de tres cuadras del Metro Parque Bustamante (Línea 5) y del parque homónimo, ' +
    'rodeado de restaurantes, ciclovías, áreas verdes, centros culturales, clínicas y supermercados. ' +
    'Edificio con portería 24/7, gimnasio, lavandería y sala de eventos disponibles para residentes. ' +
    'Una terraza de este tamaño, en este sector y a este precio, prácticamente no existe en el mercado. Es una oportunidad única en Santiago.',
  sqm: 30,
  bedrooms: 1,
  bathrooms: 1,
  storage: true,
  parking: false,
  location: 'Santiago Centro / Providencia, Santiago',
  address: 'Gral. Jofré 67, Santiago, Región Metropolitana',
  monthlyRent: 460000,
  commonExpenses: 0,
};

export const images: PropertyImage[] = [
  {
    id: 'hero',
    cloudinaryPublicId: 'Terraza1_wbyfek',
    alt: 'Terraza privada de 35 m² con vista al Cerro San Cristóbal',
    description: 'La postal de la propiedad: 35 m² de terraza propia, con el Cerro San Cristóbal de fondo.',
    isHero: true,
  },
  {
    id: '1',
    cloudinaryPublicId: 'Terraza1_wbyfek',
    alt: 'Terraza privada de 35 m²',
    description: 'El espacio que lo cambia todo: 35 m² para uso exclusivo, sin edificios que tapen la vista al cerro.',
    isHero: false,
  },
  {
    id: '2',
    cloudinaryPublicId: 'Terraza3_fxj97f',
    alt: 'Terraza — otro ángulo',
    description: 'Otro ángulo de la terraza: espacio de sobra para exterior, quincho o área de estar al aire libre.',
    isHero: false,
  },
  {
    id: '3',
    cloudinaryPublicId: 'Living1_npol84',
    alt: 'Living con salida a terraza',
    description: 'Living luminoso con salida directa a la terraza privada, el corazón del departamento.',
    isHero: false,
  },
  {
    id: '4',
    cloudinaryPublicId: 'Living2_jicttw',
    alt: 'Living — ángulo alternativo',
    description: 'El living tiene su propio espacio, sin compartir muro con el dormitorio.',
    isHero: false,
  },
  {
    id: '5',
    cloudinaryPublicId: 'Cocina1_qmgwwl',
    alt: 'Cocina equipada',
    description: 'Práctica y funcional, lista para el día a día.',
    isHero: false,
  },
  {
    id: '6',
    cloudinaryPublicId: 'Pieza1_drhgxw',
    alt: 'Dormitorio',
    description: 'Dormitorio independiente del living, luminoso y bien proporcionado.',
    isHero: false,
  },
  {
    id: '7',
    cloudinaryPublicId: 'baño1_zriy8e',
    alt: 'Baño completo',
    description: 'Terminaciones en buen estado, listo para usar.',
    isHero: false,
  },
];
