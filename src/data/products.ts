export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: 'angels',
    title: 'Änglar',
    description: 'Handgjutna bronseänglar i olika storlekar och utföranden.',
    image: '/images/products/angels.jpg',
  },
  {
    id: 'candlesticks',
    title: 'Malmljusstakar',
    description: 'Klassiska ljusstakar gjutna i brons med tidlös design.',
    image: '/images/products/candlesticks.jpg',
  },
  {
    id: 'gnomes',
    title: 'Tomtar',
    description: 'Traditionella svenska tomtar gjutna i brons.',
    image: '/images/products/gnomes.jpg',
  },
  {
    id: 'bells',
    title: 'Malmklockor',
    description: 'Bronsklockor med klangfull ton och vacker patina.',
    image: '/images/products/bells.jpg',
  },
  {
    id: 'church',
    title: 'Till kyrka och församling',
    description: 'Sakrala föremål och prydnader gjutna i brons för kyrkor och kapell.',
    image: '/images/products/church.jpg',
  },
  {
    id: 'plaques',
    title: 'Tavlor',
    description: 'Relieftavlor och minnestavlor i brons för offentliga miljöer och hem.',
    image: '/images/products/plaques.jpg',
  },
  {
    id: 'other',
    title: 'Övriga produkter',
    description: 'Ett brett sortiment av bronsgjutna föremål för olika ändamål.',
    image: '/images/products/other.jpg',
  },
];

export interface CustomOrderCategory {
  id: string;
  title: string;
}

export const customOrderCategories: CustomOrderCategory[] = [
  { id: 'vintage-cars', title: 'Delar till veteranbilar' },
  { id: 'boats', title: 'Båtar' },
  { id: 'furniture', title: 'Möbler' },
  { id: 'signs', title: 'Skyltar' },
  { id: 'artwork', title: 'Konstverk' },
];
