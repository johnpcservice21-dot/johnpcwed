import { ShoppingCart, Check, Eye, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Product } from '@/types';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewProduct: (product: Product) => void;
  viewMode?: 'grid' | 'list';
}

export function ProductCard({ product, onAddToCart, onViewProduct, viewMode = 'grid' }: ProductCardProps) {
  const [added, setAdded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  // List View
  if (viewMode === 'list') {
    return (
      <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
        <div className="flex flex-col sm:flex-row">
          {/* Image */}
          <div className="relative sm:w-64 h-48 sm:h-auto overflow-hidden bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            
            {discount && (
              <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                -{discount}%
              </div>
            )}
            
            {product.featured && !discount && (
              <div className="absolute top-3 left-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                DESTACADO
              </div>
            )}
          </div>
          
          {/* Content */}
          <div className="flex-1 p-5 flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-1 rounded">
                  {product.category}
                </span>
                {product.inStock ? (
                  <span className="text-xs text-green-600 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    En stock
                  </span>
                ) : (
                  <span className="text-xs text-red-600 flex items-center gap-1">
                    <span className="w-2 h-2 bg-red-500 rounded-full" />
                    Agotado
                  </span>
                )}
              </div>
              
              <h3 
                onClick={() => onViewProduct(product)}
                className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer transition-colors"
              >
                {product.name}
              </h3>
              
              <p className="text-gray-600 text-sm mb-3">{product.specs}</p>
              
              {product.description && (
                <p className="text-gray-500 text-sm line-clamp-2">{product.description}</p>
              )}
            </div>
            
            {/* Price & Actions */}
            <div className="sm:w-48 flex flex-col justify-between">
              <div className="text-right mb-4">
                <span className="text-2xl font-bold text-gray-900">
                  RD${product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="block text-sm text-gray-400 line-through">
                    RD${product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              
              <div className="flex gap-2">
                <Button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`flex-1 ${added ? 'bg-green-500' : 'bg-gray-900 hover:bg-blue-600'}`}
                >
                  {added ? <Check className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => onViewProduct(product)}
                  className="px-3"
                >
                  <Eye className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid View (default)
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button 
            onClick={() => onViewProduct(product)}
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
            title="Ver detalles"
          >
            <Eye className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75 ${
              isLiked ? 'bg-red-500 text-white' : 'bg-white text-gray-700 hover:bg-red-500 hover:text-white'
            }`}
            title="Agregar a favoritos"
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
          </button>
        </div>
        
        {discount && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            -{discount}%
          </div>
        )}
        
        {product.featured && !discount && (
          <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            DESTACADO
          </div>
        )}
        
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="bg-gray-800 text-white px-4 py-2 rounded-full font-bold text-lg">
              AGOTADO
            </span>
          </div>
        )}
        
        {/* Precio flotante */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
          <span className="text-xl font-bold text-gray-900">
            RD${product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="block text-sm text-gray-400 line-through">
              RD${product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-1 rounded">
            {product.category}
          </span>
          {product.inStock ? (
            <span className="text-xs text-green-600 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              En stock
            </span>
          ) : (
            <span className="text-xs text-red-600 flex items-center gap-1">
              <span className="w-2 h-2 bg-red-500 rounded-full" />
              Agotado
            </span>
          )}
        </div>
        
        <h3 
          onClick={() => onViewProduct(product)}
          className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 cursor-pointer transition-colors"
        >
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.specs}
        </p>
        
        <div className="flex gap-2">
          <Button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`flex-1 py-5 text-base font-semibold rounded-xl transition-all duration-300 ${
              added
                ? 'bg-green-500 hover:bg-green-600'
                : 'bg-gray-900 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30'
            }`}
          >
            {added ? (
              <>
                <Check className="w-5 h-5 mr-2" />
                Agregado
              </>
            ) : !product.inStock ? (
              'Agotado'
            ) : (
              <>
                <ShoppingCart className="w-5 h-5 mr-2" />
                Agregar
              </>
            )}
          </Button>
          <Button
            variant="outline"
            onClick={() => onViewProduct(product)}
            className="px-4"
          >
            <Eye className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
