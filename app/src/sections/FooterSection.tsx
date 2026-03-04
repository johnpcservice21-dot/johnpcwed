import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, X } from 'lucide-react';
import { useState } from 'react';

interface FooterSectionProps {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  country: string;
}

function PrivacyModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-6 border-b bg-gray-900 text-white rounded-t-2xl">
          <h2 className="text-xl font-bold">Política de Privacidad</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="overflow-y-auto p-6 space-y-6 text-gray-700 text-sm leading-relaxed">
          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">1. Información que Recopilamos</h3>
            <p>En John PC Service recopilamos la siguiente información cuando utilizas nuestra página web:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Nombre y número de teléfono cuando nos contactas por WhatsApp</li>
              <li>Correo electrónico si nos escribes directamente</li>
              <li>Información de navegación como páginas visitadas y productos vistos</li>
              <li>Dirección IP y tipo de dispositivo para mejorar la experiencia</li>
            </ul>
          </section>
          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">2. Cómo Usamos tu Información</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Procesar y gestionar tus pedidos</li>
              <li>Responderte consultas sobre productos y disponibilidad</li>
              <li>Enviarte notificaciones de nuevos productos y ofertas (solo si las activaste)</li>
              <li>Mejorar nuestra página web y experiencia de compra</li>
            </ul>
          </section>
          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">3. Notificaciones Push</h3>
            <p>Si aceptaste recibir notificaciones push, te enviaremos alertas sobre nuevos productos y descuentos. Puedes cancelarlas en cualquier momento desde la configuración de tu navegador.</p>
          </section>
          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">4. Compartir Información con Terceros</h3>
            <p>No vendemos ni compartimos tu información personal, excepto con servicios de análisis (Google Analytics) y notificaciones (OneSignal) de forma anónima.</p>
          </section>
          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">5. Tus Derechos</h3>
            <p>Tienes derecho a acceder, corregir o eliminar tus datos personales. Contáctanos a <a href="mailto:johnpcservice21@gmail.com" className="text-blue-600 hover:underline">johnpcservice21@gmail.com</a></p>
          </section>
          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">6. Contacto</h3>
            <p>C/ Duarte No. 21 Libertador de Heredia, Santo Domingo Oeste, República Dominicana</p>
            <p className="mt-1">Última actualización: febrero 2026</p>
          </section>
        </div>
      </div>
    </div>
  );
}

function TermsModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-6 border-b bg-gray-900 text-white rounded-t-2xl">
          <h2 className="text-xl font-bold">Términos de Servicio</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="overflow-y-auto p-6 space-y-6 text-gray-700 text-sm leading-relaxed">
          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">1. Productos y Precios</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Todos los precios están expresados en pesos dominicanos (RD$)</li>
              <li>Los precios pueden cambiar sin previo aviso</li>
              <li>La disponibilidad está sujeta a existencia en inventario</li>
            </ul>
          </section>
          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">2. Proceso de Compra</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Seleccionas los productos en la página</li>
              <li>Nos contactas por WhatsApp con tu pedido</li>
              <li>Confirmamos disponibilidad y precio final</li>
              <li>La venta se concreta una vez confirmado el pago</li>
            </ul>
          </section>
          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">3. Garantía</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Todos los productos incluyen garantía de 1 año contra defectos de fábrica</li>
              <li>La garantía no cubre daños por mal uso, golpes o líquidos</li>
              <li>Los accesorios tienen garantía de 6 meses</li>
            </ul>
          </section>
          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">4. Envíos y Entregas</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Entregas en Santo Domingo y zonas metropolitanas</li>
              <li>Tiempo de entrega: 1 a 3 días hábiles</li>
              <li>También puedes recoger en nuestra tienda física</li>
            </ul>
          </section>
          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">5. Devoluciones</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Aceptamos devoluciones dentro de los primeros 7 días</li>
              <li>El producto debe estar en su empaque original y sin uso</li>
              <li>No aceptamos devoluciones de software o productos digitales</li>
            </ul>
          </section>
          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">6. Contacto</h3>
            <p>C/ Duarte No. 21 Libertador de Heredia, Santo Domingo Oeste, República Dominicana</p>
            <p className="mt-1">Última actualización: febrero 2026</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export function FooterSection({
  phone,
  whatsapp,
  email,
  address,
  city,
  country
}: FooterSectionProps) {
  const currentYear = new Date().getFullYear();
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <footer id="contacto" className="bg-gray-900 border-t border-gray-800">
      {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
      {showTerms && <TermsModal onClose={() => setShowTerms(false)} />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo.png"
                alt="John PC Service"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Tu tienda de confianza para computadoras, reparaciones y componentes gaming en República Dominicana.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-white transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Productos</h3>
            <ul className="space-y-4">
              {['Laptops Gaming', 'PCs de Escritorio', 'Componentes', 'Periféricos', 'Accesorios'].map(item => (
                <li key={item}>
                  <a href="#productos" className="text-gray-400 hover:text-blue-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Soporte</h3>
            <ul className="space-y-4">
              <li><a href="#contacto" className="text-gray-400 hover:text-blue-400 transition-colors">Contacto</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Envíos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Garantía</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Devoluciones</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">{address}<br />{city}, {country}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href={`tel:${phone}`} className="text-gray-400 hover:text-blue-400 transition-colors">TEL: {phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">WhatsApp: {whatsapp}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href={`mailto:${email}`} className="text-gray-400 hover:text-blue-400 transition-colors">{email}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} John PC Service. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <button
              onClick={() => setShowPrivacy(true)}
              className="text-gray-500 hover:text-gray-300 transition-colors"
            >
              Política de Privacidad
            </button>
            <button
              onClick={() => setShowTerms(true)}
              className="text-gray-500 hover:text-gray-300 transition-colors"
            >
              Términos de Servicio
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
