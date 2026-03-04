import { X, ShoppingCart, Check, Heart, Truck, Shield, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Product } from '@/types';
import { useState } from 'react';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  whatsappNumber: string;
}

export function ProductDetailModal({ 
  product, 
  isOpen, 
  onClose, 
  onAddToCart,
  whatsappNumber 
}: ProductDetailModalProps) {
  const [added, setAdded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const handleWhatsAppInquiry = () => {
    const message = `Hola! Me interesa el ${product.name} por RD$${product.price.toLocaleString()}. ¿Está disponible?`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const galleryImages = [product.image, product.image, product.image];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-2 h-full max-h-[90vh] overflow-auto">
          {/* Image Section */}
          <div className="bg-gray-100 p-6 md:p-8">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white mb-4">
              <img
                src={galleryImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex gap-2 justify-center">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-blue-500' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div className="p-6 md:p-8 flex flex-col">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3">
                {product.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h2>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-500 text-sm">(24 reseñas)</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl font-bold text-gray-900">
                RD${product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-400 line-through">
                    RD${product.originalPrice.toLocaleString()}
                  </span>
                  <span className="px-2 py-1 bg-red-100 text-red-600 rounded-lg text-sm font-bold">
                    -{discount}%
                  </span>
                </>
              )}
            </div>

            {/* Specs */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Especificaciones</h3>
              <p className="text-gray-600">{product.specs}</p>
            </div>

            {product.description && (
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Descripción</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Truck className="w-4 h-4 text-blue-500" />
                <span>Envío disponible</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Garantía 1 año</span>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-6">
              {product.inStock ? (
                <>
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-600 font-medium">En stock - Listo para envío</span>
                </>
              ) : (
                <>
                  <span className="w-3 h-3 bg-red-500 rounded-full" />
                  <span className="text-red-600 font-medium">Agotado</span>
                </>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-auto">
              <Button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`flex-1 py-6 text-lg font-semibold rounded-xl transition-all ${
                  added
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'bg-gray-900 hover:bg-blue-600'
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
                    Agregar al Carrito
                  </>
                )}
              </Button>
              
              <Button
                variant="outline"
                onClick={() => setIsLiked(!isLiked)}
                className={`px-4 ${isLiked ? 'border-red-200 bg-red-50' : ''}`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
              </Button>
              
              <Button
                variant="outline"
                onClick={handleWhatsAppInquiry}
                className="px-4 border-green-200 hover:bg-green-50"
              >
                <MessageCircle className="w-5 h-5 text-green-600" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
