import { MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  whatsappNumber: string;
}

export function CTASection({ whatsappNumber }: CTASectionProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          ¿Listo para armar tu PC ideal?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Tenemos todo lo que necesitas.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contactar por WhatsApp
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-8 text-blue-200">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Atención inmediata</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Presupuesto sin compromiso</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Garantía en todos los productos</span>
          </div>
        </div>
      </div>
    </section>
  );
}
