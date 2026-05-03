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
  location: string;
  address: string;
  monthlyRent: number;    // interno, no se muestra en el sitio
  commonExpenses: number; // interno, no se muestra en el sitio
}

export const property: Property = {
  title: 'Departamento en General Jofré',
  subtitle: 'Terraza de 20 m² con vista al Cerro San Cristóbal, a pasos del Metro Parque Bustamante',
  description:
    'Departamento único en su tipo, en el límite entre Santiago Centro y Providencia. ' +
    'Su gran atractivo es una terraza privada de 20 m² — exclusiva de pocos departamentos en el edificio — ' +
    'con vista despejada al Cerro San Cristóbal y al entorno arborizado del sector. ' +
    'Distribuido en cocina cerrada completamente equipada, living-comedor, dos dormitorios ' +
    '(el principal es un espacio amplio resultado de la unión de dos dormitorios originales) y baño. ' +
    'A menos de dos cuadras del Metro Parque Bustamante (Línea 5) y del parque homónimo, ' +
    'rodeado de restaurantes, ciclovías, áreas verdes, centros culturales, clínicas y supermercados. ' +
    'Edificio con portería 24/7.',
  sqm: 90,
  bedrooms: 2,
  bathrooms: 1,
  location: 'Santiago Centro / Providencia, Santiago',
  address: 'Gral. Jofré 67, Santiago, Región Metropolitana',
  monthlyRent: 580000,
  commonExpenses: 0,
};

export const images: PropertyImage[] = [
  {
    id: '1',
    cloudinaryPublicId: 'property/terraza1',
    alt: 'Terraza con vista al Cerro San Cristóbal',
    description: 'Terraza privada de 20 m² con vista despejada al Cerro San Cristóbal, exclusiva de pocos departamentos en el edificio.',
    isHero: true,
  },
  {
    id: '2',
    cloudinaryPublicId: 'property/terraza2',
    alt: 'Terraza — vista panorámica',
    description: 'Amplio espacio exterior de 20 m², ideal para disfrutar al aire libre con vista al Cerro San Cristóbal.',
    isHero: false,
  },
  {
    id: '3',
    cloudinaryPublicId: 'property/terraza3',
    alt: 'Terraza — detalle y entorno',
    description: 'La terraza cuenta con espacio suficiente para mesa, sillas y área de descanso.',
    isHero: false,
  },
  {
    id: '4',
    cloudinaryPublicId: 'property/dormitorio1-1',
    alt: 'Dormitorio principal amplio',
    description: 'Dormitorio principal de gran tamaño, resultado de la unión de dos dormitorios originales, con abundante luz natural.',
    isHero: false,
  },
  {
    id: '5',
    cloudinaryPublicId: 'property/dormitorio2-1',
    alt: 'Segundo dormitorio',
    description: 'Segundo dormitorio cómodo y bien iluminado, ideal para visitas u oficina en casa.',
    isHero: false,
  },
  {
    id: '6',
    cloudinaryPublicId: 'property/dormitorio2-2',
    alt: 'Segundo dormitorio — ángulo alternativo',
    description: 'Vista complementaria del segundo dormitorio, mostrando el aprovechamiento del espacio.',
    isHero: false,
  },
  {
    id: '7',
    cloudinaryPublicId: 'property/living1',
    alt: 'Living-comedor',
    description: 'Living-comedor integrado con buena iluminación natural y acceso directo a la terraza.',
    isHero: false,
  },
  {
    id: '8',
    cloudinaryPublicId: 'property/bano1',
    alt: 'Baño completo',
    description: 'Baño completo con ducha y terminaciones en buen estado.',
    isHero: false,
  },
];
