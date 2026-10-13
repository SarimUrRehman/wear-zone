export interface Product {
  id: string;
  name: string;
  category: 'shalwar-kameez' | 'kurta' | 'waistcoats' | 'suits-blazers' | 'casual-shirts' | 'trousers' | 'wedding' | 'winter';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  description: string;
  fabric: string;
  details: string[];
  image: string;
  secondaryImage?: string;
  isCustomStitchAvailable: boolean;
  featured?: boolean;
}

export interface Category {
  id: string;
  title: string;
  tagline: string;
  slug: Product['category'];
  image: string;
  itemCount: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  occasion: string;
  verified: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}
