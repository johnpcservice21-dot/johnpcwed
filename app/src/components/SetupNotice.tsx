import { AlertCircle, X } from 'lucide-react';
import { useState } from 'react';

interface SetupNoticeProps {
  show: boolean;
}

export function SetupNotice({ show }: SetupNoticeProps) {
  const [dismissed, setDismissed] = useState(false);

  if (!show || dismissed) return null;

  return (
    <div className="fixed top-24 left-4 right-4 z-40 max-w-2xl mx-auto">
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 shadow-lg">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <h4 className="font-semibold text-amber-800 mb-1">
              Configuración Pendiente
            </h4>
            <p className="text-amber-700 text-sm">
              La tienda está mostrando productos de ejemplo. 
              Conecta tu Google Sheet para gestionar productos, precios e imágenes fácilmente.{' '}
              <a 
                href="#setup" 
                className="underline font-medium hover:text-amber-900"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('setup-instructions')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Ver instrucciones
              </a>
            </p>
          </div>
          <button
            onClick={() => setDismissed(true)}
            className="text-amber-600 hover:text-amber-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
