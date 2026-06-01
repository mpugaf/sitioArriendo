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
  title: 'Departamento en General Jofré',
  subtitle: 'Terraza de 20 m² con vista al Cerro San Cristóbal, a pasos del Metro Parque Bustamante',
  description:
    'Departamento único en su tipo, en el límite entre Santiago Centro y Providencia. ' +
    'Su gran atractivo es una terraza privada de 20 m² — exclusiva de pocos departamentos en el edificio — ' +
    'con vista despejada al Cerro San Cristóbal y al entorno arborizado del sector. ' +
    'Distribuido en cocina cerrada completamente equipada, living-comedor, dos dormitorios ' +
    '(el principal es un espacio amplio resultado de la unión de dos dormitorios originales) y baño. ' +
    'A menos de tres cuadras del Metro Parque Bustamante (Línea 5) y del parque homónimo, ' +
    'rodeado de restaurantes, ciclovías, áreas verdes, centros culturales, clínicas y supermercados. ' +
    'Edificio con portería 24/7, gimnasio, lavandería y sala de eventos disponibles para residentes. ' +
    'Una combinación así — terraza privada, dormitorio de esta amplitud, en este sector y a este precio — prácticamente no existe en el mercado. Es una oportunidad única en santiago.',
  sqm: 72,
  bedrooms: 2,
  bathrooms: 1,
  storage: true,
  parking: true,
  location: 'Santiago Centro / Providencia, Santiago',
  address: 'Gral. Jofré 67, Santiago, Región Metropolitana',
  monthlyRent: 580000,
  commonExpenses: 0,
};

export const images: PropertyImage[] = [
  {
    id: 'hero',
    cloudinaryPublicId: 'v2-terraza1_jxu2xt',
    alt: 'Terraza privada con vista al Cerro San Cristóbal',
    description: 'Terraza privada de 20 m² con vista despejada al Cerro San Cristóbal.',
    isHero: true,
  },
  {
    id: '1',
    cloudinaryPublicId: 'v2-terraza1_jxu2xt',
    alt: 'Terraza privada de 20 m²',
    description: 'El espacio que lo cambia todo: terraza privada de 20 m², exclusiva de pocos departamentos en el edificio, con vista despejada al Cerro San Cristóbal.',
    isHero: false,
  },
  {
    id: '2',
    cloudinaryPublicId: 'v2-cocina1_mqkpqw',
    alt: 'Cocina cerrada y equipada',
    description: 'Cocina completamente equipada y cerrada: Cocina a gas y horno. La cocina cerrada mantiene los olores separados del living.',
    isHero: false,
  },
  {
    id: '3',
    cloudinaryPublicId: 'v2-comedor1_pohuvn',
    alt: 'Comedor integrado al living',
    description: 'Comedor cómodo integrado al living, bañado de luz natural. Con espacio para mesa de 4 a 6 personas sin que el ambiente se sienta apretado.',
    isHero: false,
  },
  {
    id: '4',
    cloudinaryPublicId: 'v2-living1_frrvfp',
    alt: 'Living con salida a terraza',
    description: 'Living amplio y bien iluminado, con salida directa a la terraza privada. El punto de partida para empezar y terminar el día con la mejor vista.',
    isHero: false,
  },
  {
    id: '5',
    cloudinaryPublicId: 'v2-pasillo1_tozrht',
    alt: 'Pasillo central del departamento',
    description: 'Distribución eficiente y sin espacios perdidos. El pasillo conecta dormitorios y áreas comunes con comodidad, bien proporcionado para el tamaño del departamento.',
    isHero: false,
  },
  {
    id: '6',
    cloudinaryPublicId: 'v2-bano1_wlwy25',
    alt: 'Baño completo',
    description: 'Baño completo con ducha y terminaciones en buen estado.',
    isHero: false,
  },
  {
    id: '7',
    cloudinaryPublicId: 'v2-dormitorio2-1_jhgi7z',
    alt: 'Segundo dormitorio',
    description: 'Dormitorio secundario luminoso y bien proporcionado. Perfecto para visitas, pieza de niño u oficina en casa.',
    isHero: false,
  },
  {
    id: '8',
    cloudinaryPublicId: 'v2-dormitorio2-2_h6t3zv',
    alt: 'Segundo dormitorio — ángulo alternativo',
    description: 'El segundo dormitorio tiene espacio suficiente para cama de dos plazas y muebles. Versátil y adaptable a distintas necesidades.',
    isHero: false,
  },
  {
    id: '9',
    cloudinaryPublicId: 'v2-dormitorio1-1_k0ofi8',
    alt: 'Dormitorio principal — amplitud total',
    description: 'El dormitorio principal es el resultado de unir dos habitaciones: un espacio excepcionalmente amplio para Santiago, con luz natural por dos orientaciones.',
    isHero: false,
  },
  {
    id: '10',
    cloudinaryPublicId: 'v2-dormitorio1-2_fevqhd',
    alt: 'Dormitorio principal — espacio real',
    description: 'La amplitud impresiona desde el primer paso adentro. Entra con comodidad una cama king, veladores, cómoda y escritorio. El espacio que rara vez se encuentra.',
    isHero: false,
  },
  {
    id: '11',
    cloudinaryPublicId: 'v2-dormitorio1-3_ady4ko',
    alt: 'Dormitorio principal — iluminación natural',
    description: 'Luz natural generosa durante la mañana y tarde. La altura de techos y la orientación de las ventanas hacen que el espacio se perciba aún más grande de lo que ya es.',
    isHero: false,
  },
  {
    id: '12',
    cloudinaryPublicId: 'v2-dormitorio1-4_bunwsl',
    alt: 'Dormitorio principal — vista desde el acceso',
    description: 'Vista desde la puerta: la profundidad del dormitorio principal sorprende. Difícil de imaginar sin verlo, fácil de apreciar en persona.',
    isHero: false,
  },
  {
    id: '13',
    cloudinaryPublicId: 'v2-dormitorio1-5_nkpgsk',
    alt: 'Dormitorio principal — rincón versátil',
    description: 'Un dormitorio tan amplio que permite zonificar: cama, escritorio, área de lectura. Incluso hay espacio para un walking closet si se desea.',
    isHero: false,
  },
  {
    id: '14',
    cloudinaryPublicId: 'v2-terraza2_ocbze0',
    alt: 'Terraza — vista al Cerro San Cristóbal',
    description: 'Vista norte desde la terraza: el Cerro San Cristóbal sin edificios que interrumpan. Una perspectiva difícil de encontrar a este precio en Santiago.',
    isHero: false,
  },
  {
    id: '15',
    cloudinaryPublicId: 'v2-terraza3_a2gdco',
    alt: 'Terraza — entorno arborizado',
    description: 'La terraza se asoma sobre el entorno arborizado del sector, con silencio, privacidad y temperatura agradable la mayor parte del año.',
    isHero: false,
  },
  {
    id: '16',
    cloudinaryPublicId: 'property/terraza1',
    alt: 'Terraza — atardecer',
    description: 'La luz del atardecer entra directa a la terraza. 20 m² de espacio propio para desconectarse, en pleno corazón de Santiago.',
    isHero: false,
  },
];
