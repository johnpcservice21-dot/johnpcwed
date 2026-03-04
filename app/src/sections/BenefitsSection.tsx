import { Wrench, Shield, Headphones, Lock, Truck, Award, Clock, MessageCircle, Star, Cpu } from 'lucide-react';

const benefits = [
  {
    icon: Wrench,
    title: 'Reparaciones',
    description: 'Servicio técnico especializado en smartphones y computadoras con diagnóstico gratuito',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Shield,
    title: 'Garantía Extendida',
    description: 'Hasta 3 años de garantía en productos seleccionados con cobertura total',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Headphones,
    title: 'Soporte 24/7',
    description: 'Asesoría técnica profesional cuando la necesites por WhatsApp o llamada',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Lock,
    title: 'Pago Seguro',
    description: 'Transacciones protegidas con encriptación SSL y múltiples métodos de pago',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Truck,
    title: 'Envío Rápido',
    description: 'Entrega en 24-48 horas en Santo Domingo y envíos a todo el país',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Award,
    title: 'Productos Originales',
    description: '100% garantizado. Todos nuestros productos son originales con factura',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Clock,
    title: 'Instalación Express',
    description: 'Montaje de PCs gaming en menos de 24 horas con pruebas de rendimiento',
    color: 'from-teal-500 to-green-500'
  },
  {
    icon: Cpu,
    title: 'Asesoría Personalizada',
    description: 'Te ayudamos a elegir el equipo perfecto según tus necesidades y presupuesto',
    color: 'from-pink-500 to-rose-500'
  }
];

export function BenefitsSection() {
  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
            Nuestras Ventajas
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
            ¿Por qué elegir <span className="text-blue-400">John PC Service</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Más de 10 años brindando el mejor servicio en tecnología
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient border on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} 
                   style={{ padding: '1px' }}>
                <div className="w-full h-full bg-gray-800 rounded-2xl" />
              </div>
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8">
          <div className="flex items-center gap-2 text-gray-500">
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
            <span className="text-sm">4.9/5 en Google Reviews</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <Shield className="w-5 h-5 text-green-500" />
            <span className="text-sm">Garantía en todos los productos</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <MessageCircle className="w-5 h-5 text-blue-500" />
            <span className="text-sm">Soporte por WhatsApp</span>
          </div>
        </div>
      </div>
    </section>
  );
}
