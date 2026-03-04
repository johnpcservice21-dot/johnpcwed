export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  specs: string;
  description?: string;
  inStock: boolean;
  featured: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface SiteConfig {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  country: string;
  heroTitle: string;
  heroSubtitle: string;
  ctaText: string;
}
