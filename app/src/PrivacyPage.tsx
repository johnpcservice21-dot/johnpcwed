import { ArrowLeft } from 'lucide-react';

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <a href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </a>
          <h1 className="text-4xl font-bold">Política de Privacidad</h1>
          <p className="text-gray-400 mt-2">Última actualización: febrero 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Información que Recopilamos</h2>
            <p>En John PC Service recopilamos la siguiente información cuando utilizas nuestra página web:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Nombre y número de teléfono cuando nos contactas por WhatsApp</li>
              <li>Correo electrónico si nos escribes directamente</li>
              <li>Información de navegación como páginas visitadas y productos vistos</li>
              <li>Dirección IP y tipo de dispositivo para mejorar la experiencia</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Cómo Usamos tu Información</h2>
            <p>Utilizamos la información recopilada para:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Procesar y gestionar tus pedidos</li>
              <li>Responderte consultas sobre productos y disponibilidad</li>
              <li>Enviarte notificaciones de nuevos productos y ofertas (solo si las activaste)</li>
              <li>Mejorar nuestra página web y experiencia de compra</li>
              <li>Cumplir con obligaciones legales en República Dominicana</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Notificaciones Push</h2>
            <p>Si aceptaste recibir notificaciones push en tu navegador, te enviaremos alertas sobre nuevos productos, descuentos y promociones especiales. Puedes cancelar estas notificaciones en cualquier momento desde la configuración de tu navegador.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Compartir Información con Terceros</h2>
            <p>No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto en los siguientes casos:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Cuando sea requerido por la ley o autoridades competentes</li>
              <li>Servicios de análisis web como Google Analytics (datos anónimos)</li>
              <li>Servicios de notificaciones como OneSignal (solo para enviar alertas)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Seguridad de tus Datos</h2>
            <p>Implementamos medidas de seguridad para proteger tu información personal. Sin embargo, ningún método de transmisión por Internet es 100% seguro. Hacemos nuestro mejor esfuerzo para proteger tus datos pero no podemos garantizar seguridad absoluta.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies</h2>
            <p>Utilizamos cookies para mejorar tu experiencia de navegación, recordar los productos en tu carrito y analizar el tráfico de nuestra página. Puedes desactivar las cookies desde la configuración de tu navegador, aunque esto puede afectar algunas funcionalidades.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Tus Derechos</h2>
            <p>Tienes derecho a:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Acceder a la información personal que tenemos sobre ti</li>
              <li>Solicitar la corrección de datos incorrectos</li>
              <li>Solicitar la eliminación de tus datos personales</li>
              <li>Cancelar la suscripción a notificaciones en cualquier momento</li>
            </ul>
            <p className="mt-3">Para ejercer estos derechos contáctanos a: <a href="mailto:johnpcservice21@gmail.com" className="text-blue-600 hover:underline">johnpcservice21@gmail.com</a></p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contacto</h2>
            <p>Si tienes preguntas sobre esta política de privacidad puedes contactarnos:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Email: <a href="mailto:johnpcservice21@gmail.com" className="text-blue-600 hover:underline">johnpcservice21@gmail.com</a></li>
              <li>WhatsApp: <a href="https://wa.me/18298488062" className="text-blue-600 hover:underline">+1 829 848 8062</a></li>
              <li>Dirección: C/ Duarte No. 21 Libertador de Heredia, Santo Domingo Oeste, República Dominicana</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
