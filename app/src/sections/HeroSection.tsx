import { ArrowDown, MessageCircle, Package, Zap, Shield, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  whatsappNumber: string;
}

export function HeroSection({ title, subtitle, ctaText, whatsappNumber }: HeroSectionProps) {
  const scrollToProducts = () => {
    document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-24">
        {/* Logo */}
        <div className="mb-8 animate-fade-in-up">
          <img 
            src="/logo.png" 
            alt="John PC Service" 
            className="h-24 sm:h-32 w-auto mx-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto animate-fade-in-up">
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
          <Button
            onClick={scrollToProducts}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all hover:-translate-y-1"
          >
            <Package className="w-5 h-5 mr-2" />
            Ver Productos
          </Button>
          
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-green-500/50 bg-green-500/10 hover:bg-green-500/20 text-green-400 hover:text-green-300 px-8 py-6 text-lg font-semibold rounded-full backdrop-blur-sm transition-all hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5 mr-2 fill-current" />
              {ctaText}
            </Button>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 animate-fade-in-up">
          <div className="flex items-center gap-2 text-gray-400">
            <Shield className="w-5 h-5 text-blue-400" />
            <span className="text-sm">Garantía incluida</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Truck className="w-5 h-5 text-blue-400" />
            <span className="text-sm">Envío rápido</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Zap className="w-5 h-5 text-blue-400" />
            <span className="text-sm">Soporte técnico</span>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm">
            <div className="text-3xl sm:text-4xl font-bold text-blue-400">500+</div>
            <div className="text-gray-400 text-sm mt-1">Productos</div>
          </div>
          <div className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm">
            <div className="text-3xl sm:text-4xl font-bold text-blue-400">10+</div>
            <div className="text-gray-400 text-sm mt-1">Años de experiencia</div>
          </div>
          <div className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm">
            <div className="text-3xl sm:text-4xl font-bold text-blue-400">1000+</div>
            <div className="text-gray-400 text-sm mt-1">Clientes satisfechos</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
      >
        <ArrowDown className="w-8 h-8" />
      </button>
    </section>
  );
}
