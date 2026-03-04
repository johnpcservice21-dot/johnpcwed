import { ArrowLeft } from 'lucide-react';

export function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <a href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </a>
          <h1 className="text-4xl font-bold">Términos de Servicio</h1>
          <p className="text-gray-400 mt-2">Última actualización: febrero 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Aceptación de los Términos</h2>
            <p>Al acceder y utilizar la página web de John PC Service, aceptas estos términos de servicio. Si no estás de acuerdo con alguno de estos términos, te pedimos que no utilices nuestra página.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Productos y Precios</h2>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Todos los precios están expresados en pesos dominicanos (RD$)</li>
              <li>Los precios pueden cambiar sin previo aviso</li>
              <li>Las imágenes de los productos son referenciales</li>
              <li>La disponibilidad de productos está sujeta a existencia en inventario</li>
              <li>Nos reservamos el derecho de cancelar pedidos si hay errores de precio</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Proceso de Compra</h2>
            <p>El proceso de compra en John PC Service funciona de la siguiente manera:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Seleccionas los productos de tu interés en la página</li>
              <li>Nos contactas por WhatsApp con tu pedido</li>
              <li>Confirmamos disponibilidad y precio final</li>
              <li>Acordamos método de pago y entrega</li>
              <li>La venta se concreta una vez confirmado el pago</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Garantía</h2>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Todos nuestros productos incluyen garantía de 1 año contra defectos de fábrica</li>
              <li>La garantía no cubre daños por mal uso, golpes o líquidos</li>
              <li>Para hacer válida la garantía debes presentar el comprobante de compra</li>
              <li>Los accesorios y periféricos tienen garantía de 6 meses</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Envíos y Entregas</h2>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Realizamos entregas en Santo Domingo y zonas metropolitanas</li>
              <li>El tiempo de entrega es de 1 a 3 días hábiles</li>
              <li>Los costos de envío se informan al momento de confirmar el pedido</li>
              <li>También puedes recoger tu pedido en nuestra tienda física</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Devoluciones</h2>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Aceptamos devoluciones dentro de los primeros 7 días después de la compra</li>
              <li>El producto debe estar en su empaque original y sin uso</li>
              <li>No aceptamos devoluciones de software o productos digitales</li>
              <li>Los gastos de envío por devolución corren por cuenta del comprador</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitación de Responsabilidad</h2>
            <p>John PC Service no se hace responsable por:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Daños indirectos o pérdidas de datos causados por los productos</li>
              <li>Interrupciones en el servicio de la página web</li>
              <li>Errores tipográficos en precios o descripciones</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contacto</h2>
            <p>Para cualquier consulta sobre estos términos:</p>
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
