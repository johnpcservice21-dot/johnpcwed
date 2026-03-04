import { useGoogleSheets } from '@/hooks/useGoogleSheets';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/hooks/useToast';
import { Navigation } from '@/components/Navigation';
import { CartButton } from '@/components/cart/CartButton';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SearchBar } from '@/components/SearchBar';
import { ProductDetailModal } from '@/components/ProductDetailModal';
import { ToastContainer } from '@/components/toast/ToastContainer';
import { SetupNotice } from '@/components/SetupNotice';
import { HeroSection } from '@/sections/HeroSection';
import { CategoriesSection } from '@/sections/CategoriesSection';
import { ProductsSection } from '@/sections/ProductsSection';
import { BenefitsSection } from '@/sections/BenefitsSection';
import { TestimonialsSection } from '@/sections/TestimonialsSection';
import { CTASection } from '@/sections/CTASection';
import { FooterSection } from '@/sections/FooterSection';
import { SetupSection } from '@/sections/SetupSection';
import type { Product } from '@/types';
import { useState } from 'react';
import './App.css';

function App() {
  const { products, categories, config, loading, usingSampleData } = useGoogleSheets();
  const {
    items,
    isOpen: cartIsOpen,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    openCart,
    closeCart
  } = useCart();
  const { toasts, addToast, removeToast } = useToast();

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    addToast(`${product.name} agregado al carrito`, 'success');
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsDetailModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <ToastContainer toasts={toasts} onRemove={removeToast} />

      <Navigation
        cartItemCount={totalItems}
        onCartClick={openCart}
        phone={config.phone}
      />

      <SetupNotice show={usingSampleData} />

      <HeroSection
        title={config.heroTitle}
        subtitle={config.heroSubtitle}
        ctaText={config.ctaText}
        whatsappNumber={config.whatsapp}
      />

      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">¿Buscas algo específico?</h2>
              <p className="text-gray-500 text-sm">Encuentra productos por nombre, categoría o especificaciones</p>
            </div>
            <SearchBar 
              products={products} 
              onSelectProduct={handleSelectProduct}
            />
          </div>
        </div>
      </section>

      <CategoriesSection categories={categories} />

      <ProductsSection
        products={products}
        onAddToCart={handleAddToCart}
        onViewProduct={handleSelectProduct}
        loading={loading}
      />

      <BenefitsSection />

      <TestimonialsSection />

      <CTASection whatsappNumber={config.whatsapp} />

      {usingSampleData && <SetupSection />}

      <FooterSection
        phone={config.phone}
        whatsapp={config.whatsapp}
        email={config.email}
        address={config.address}
        city={config.city}
        country={config.country}
      />

      <WhatsAppButton whatsappNumber={config.whatsapp} />

      <CartButton itemCount={totalItems} onClick={openCart} />

      <CartDrawer
        isOpen={cartIsOpen}
        onClose={closeCart}
        items={items}
        totalPrice={totalPrice}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onClear={clearCart}
        whatsappNumber={config.whatsapp}
      />

      <ProductDetailModal
        product={selectedProduct}
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        onAddToCart={handleAddToCart}
        whatsappNumber={config.whatsapp}
      />
    </div>
  );
}

export default App;
