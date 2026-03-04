import { useState, useEffect } from 'react';
import type { Product, Category, SiteConfig } from '@/types';

// CONFIGURACIÓN - Cambia esta URL por la de tu Google Apps Script
const GOOGLE_SHEETS_API_URL = 'https://script.google.com/macros/s/AKfycbwvfUsWefou5T4vMZBMT_KrPQ_1hWJL1urGskgGIRSAR-fK7gcfsPDDVmN08lPrR_hU/exec';

// Datos de ejemplo para mostrar mientras se configura el Google Sheet
const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Laptop Gaming ROG Strix',
    category: 'Laptops',
    price: 1899,
    originalPrice: 2100,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&h=400&fit=crop',
    specs: 'RTX 4070, Intel i7-13700H, 16GB RAM, 1TB SSD',
    description: 'Potente laptop gaming con la última tecnología',
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Laptop MSI Raider',
    category: 'Laptops',
    price: 2299,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&h=400&fit=crop',
    specs: 'RTX 4080, Intel i9-13900HX, 32GB RAM, 2TB SSD',
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Laptop Acer Predator',
    category: 'Laptops',
    price: 1599,
    originalPrice: 1750,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&h=400&fit=crop',
    specs: 'RTX 4060, AMD Ryzen 7, 16GB RAM, 512GB SSD',
    inStock: true,
    featured: true
  },
  {
    id: '4',
    name: 'PC Gaming Elite',
    category: 'PCs',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&h=400&fit=crop',
    specs: 'RTX 4070 Ti, Intel i7-13700K, 32GB RAM, 1TB NVMe',
    inStock: true,
    featured: true
  },
  {
    id: '5',
    name: 'PC Gaming Pro',
    category: 'PCs',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&h=400&fit=crop',
    specs: 'RTX 4060 Ti, AMD Ryzen 7 7700X, 16GB RAM, 1TB SSD',
    inStock: true,
    featured: true
  },
  {
    id: '6',
    name: 'PC Gaming Ultimate',
    category: 'PCs',
    price: 3999,
    image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&h=400&fit=crop',
    specs: 'RTX 4090, Intel i9-13900KS, 64GB RAM, 2TB NVMe',
    inStock: true,
    featured: true
  }
];

const SAMPLE_CATEGORIES: Category[] = [
  {
    id: '1',
    name: 'Laptops Gaming',
    description: 'Potencia portátil para juegos y trabajo profesional',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&h=400&fit=crop'
  },
  {
    id: '2',
    name: 'PCs de Escritorio',
    description: 'Sistemas completos personalizados',
    image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&h=400&fit=crop'
  },
  {
    id: '3',
    name: 'Componentes',
    description: 'GPUs, CPUs, RAM y más',
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&h=400&fit=crop'
  },
  {
    id: '4',
    name: 'Periféricos',
    description: 'Teclados, mouse, monitores y accesorios',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&h=400&fit=crop'
  }
];

const DEFAULT_CONFIG: SiteConfig = {
  phone: '809.534.4427',
  whatsapp: '18298488062',
  email: 'johnpcservice21@gmail.com',
  address: 'C/ Duarte No. 21 Libertador de Heredia',
  city: 'Santo Domingo Oeste',
  country: 'República Dominicana',
  heroTitle: 'John PC Service',
  heroSubtitle: 'Computadoras, reparaciones y componentes gaming',
  ctaText: 'Contactar por WhatsApp'
};

export function useGoogleSheets() {
  const [products, setProducts] = useState<Product[]>(SAMPLE_PRODUCTS);
  const [categories, setCategories] = useState<Category[]>(SAMPLE_CATEGORIES);
  const [config, setConfig] = useState<SiteConfig>(DEFAULT_CONFIG);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [usingSampleData, setUsingSampleData] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      
      // Intentar obtener datos del Google Sheet
      const response = await fetch(GOOGLE_SHEETS_API_URL);
      
      if (!response.ok) {
        throw new Error('No se pudo conectar con Google Sheets');
      }

      const data = await response.json();
      
      if (data.products && data.products.length > 0) {
        setProducts(data.products);
        setUsingSampleData(false);
      }
      
      if (data.categories && data.categories.length > 0) {
        setCategories(data.categories);
      }
      
      if (data.config) {
        setConfig({ ...DEFAULT_CONFIG, ...data.config });
      }
      
      setError(null);
    } catch (err) {
      console.log('Usando datos de ejemplo. Configura tu Google Sheet para datos personalizados.');
      setUsingSampleData(false);
      setError(null);
    } finally {
      setLoading(false);
    }
  };

  const refreshData = () => {
    fetchData();
  };

  return {
    products,
    categories,
    config,
    loading,
    error,
    usingSampleData,
    refreshData
  };
}

export { SAMPLE_PRODUCTS, SAMPLE_CATEGORIES, DEFAULT_CONFIG };
