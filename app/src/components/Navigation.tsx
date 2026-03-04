import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Phone } from 'lucide-react';

interface NavigationProps {
  cartItemCount: number;
  onCartClick: () => void;
  phone: string;
}

export function Navigation({ cartItemCount, onCartClick, phone }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="John PC Service" 
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className={`font-medium hover:text-blue-500 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('categorias')}
              className={`font-medium hover:text-blue-500 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              Categorías
            </button>
            <button
              onClick={() => scrollToSection('productos')}
              className={`font-medium hover:text-blue-500 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              Productos
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className={`font-medium hover:text-blue-500 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              Contacto
            </button>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${phone}`}
              className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
                isScrolled
                  ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>{phone}</span>
            </a>

            <button
              onClick={onCartClick}
              className={`relative p-2 rounded-full transition-all ${
                isScrolled
                  ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItemCount > 99 ? '99+' : cartItemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200/20">
            <div className="flex flex-col gap-2 pt-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-left px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('categorias')}
                className="text-left px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
              >
                Categorías
              </button>
              <button
                onClick={() => scrollToSection('productos')}
                className="text-left px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
              >
                Productos
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-left px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
