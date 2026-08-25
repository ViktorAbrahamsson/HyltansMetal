import { images, type ResponsiveImage } from '@/assets/images/manifest';

export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  /** Undefined until the category has been photographed. */
  image?: ResponsiveImage;
  imageAlt?: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: 'angels',
    title: 'Änglar',
    description: 'Handgjutna änglar i brons, i olika storlekar och utföranden.',
    image: images['products/anglar'],
    imageAlt: 'Två bronsänglar som ljusstakar med tända ljus.',
  },
  {
    id: 'candlesticks',
    title: 'Malmljusstakar',
    description: 'Klassiska malmljusstakar, svarvade och polerade för hand.',
    image: images['products/ljusstakar'],
    imageAlt: 'Nypolerade malmljusstakar uppradade på arbetsbänken i verkstaden.',
  },
  {
    id: 'gnomes',
    title: 'Tomtar',
    description: 'Traditionella svenska tomtar gjutna i brons.',
    image: images['products/tomtar'],
    imageAlt: 'Två bronstomtar med spetsiga luvor uppställda på en mörk trähylla.',
  },
  {
    id: 'other',
    title: 'Övriga produkter',
    description: 'Ett brett sortiment av sandgjutna föremål i brons och mässing.',
    image: images['products/ovrigt'],
    imageAlt: 'Nygjutna detaljer kvar i sandformen efter gjutning.',
  },
];
