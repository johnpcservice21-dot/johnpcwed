import { useState } from 'react';
import type { Product } from '@/types';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Loader2, Grid3X3, List } from 'lucide-react';

interface ProductsSectionProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onViewProduct: (product: Product) => void;
  loading?: boolean;
}

export function ProductsSection({ products, onAddToCart, onViewProduct, loading }: ProductsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showAll, setShowAll] = useState(false);

  // Obtener categorías únicas
  const categories = ['todos', ...new Set(products.map(p => p.category))];

  // Filtrar productos por categoría
  const filteredProducts = selectedCategory === 'todos'
    ? products
    : products.filter(p => p.category === selectedCategory);

  // Mostrar solo destacados inicialmente (cuando está en 'todos' y no se ha pulsado Ver Todos)
  const featuredProducts = products.filter(p => p.featured);

  const displayedProducts = selectedCategory !== 'todos'
    ? filteredProducts
    : showAll
      ? products
      : featuredProducts;

  const hasMore = selectedCategory === 'todos' && !showAll && products.length > featuredProducts.length;

  if (loading) {
    return (
      <section id="productos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Loader2 className="w-12 h-12 animate-spin mx-auto text-blue-600" />
          <p className="mt-4 text-gray-600">Cargando productos...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="productos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Catálogo
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-4">
              {showAll || selectedCategory !== 'todos' ? 'Todos los Productos' : 'Productos Destacados'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Los mejores equipos y componentes con garantía y soporte técnico
            </p>
          </div>
          
          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500'}`}
            >
              <Grid3X3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500'}`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => {
                setSelectedCategory(category);
                if (category !== 'todos') setShowAll(false);
              }}
              className={`capitalize rounded-full px-6 ${
                selectedCategory === category
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className={`grid gap-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onViewProduct={onViewProduct}
              viewMode={viewMode}
            />
          ))}
        </div>

        {/* Ver Todos Button */}
        {hasMore && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(true)}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-6 text-lg font-semibold rounded-full transition-all"
            >
              Ver Todos los Productos
            </Button>
          </div>
        )}

        {/* Results Count */}
        <div className="text-center mt-8 text-gray-500">
          Mostrando {displayedProducts.length} de {products.length} productos
        </div>
      </div>
    </section>
  );
}
