import React from 'react';
import { motion } from "framer-motion";

const userIcon = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b2e43332af375b9fc6052a/b733c40c3_descarga7.png";
const dollarIcon = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b2e43332af375b9fc6052a/b4b086197_descarga6.png";
const sphereIcon = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b2e43332af375b9fc6052a/57487a0c5_descarga5.png";

const plans = [
  {
    name: "Iniciador",
    implementationPrice: 3000,
    maintenancePrice: 1000,
    maintenancePeriod: "/mes",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/dc4e5653f_blanco.jpg",
    features: [
      { text: "1 Proceso Automatizado", icon: sphereIcon },
      { text: "Dashboard de Analíticas", icon: sphereIcon },
      { text: "Soporte Estándar", icon: userIcon },
      { text: "Reportes Mensuales", icon: dollarIcon }
    ],
    highlight: false,
    buttonText: "Comenzar"
  },
  {
    name: "Business",
    implementationPrice: 100000,
    maintenancePrice: 30000,
    maintenancePeriod: "/mes",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/8b3ed74d6_rosado20.png",
    features: [
      { text: "10 Procesos Automatizados", icon: sphereIcon },
      { text: "Asistente IA Personalizado", icon: sphereIcon },
      { text: "Soporte Prioritario 24/7", icon: userIcon },
      { text: "Integraciones Premium", icon: sphereIcon }
    ],
    highlight: true,
    buttonText: "Consultar"
  },
  {
    name: "Vortex Dominator",
    implementationPrice: 1000000,
    maintenancePrice: 300000,
    maintenancePeriod: "/mes",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/28c4f0184_rojo20.png",
    features: [
      { text: "Soluciones IA a Medida", icon: sphereIcon },
      { text: "Equipo Dedicado de I+D", icon: userIcon },
      { text: "Consultoría Estratégica", icon: userIcon },
      { text: "Acceso Beta a Tecnologías", icon: sphereIcon }
    ],
    highlight: false,
    buttonText: "Contacto Exclusivo"
  }
];

export default function PricingSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-32 bg-gradient-to-b from-gray-900 via-black to-gray-950 relative overflow-hidden">
      {/* Floating iridescent spheres */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b2e43332af375b9fc6052a/9ebf8eaa6_descarga7.png"
          alt=""
          className="absolute top-10 left-1/4 w-20 h-20 object-contain opacity-25"
          animate={{ 
            rotate: [0, 360],
            y: [-5, 10, -5]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b2e43332af375b9fc6052a/9ebf8eaa6_descarga7.png"
          alt=""
          className="absolute bottom-20 right-1/4 w-16 h-16 object-contain opacity-20"
          animate={{ 
            scale: [0.8, 1.2, 0.8],
            rotate: [360, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-light vortexia-serif mb-8">
            <span className="vortexia-text-gradient">Planes de Dominación</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Elige el nivel de poder que transformará tu realidad empresarial.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-end">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-3xl border transition-all duration-300 ${
                plan.highlight 
                  ? 'bg-gray-950 border-red-500 vortexia-glow transform lg:scale-105' 
                  : 'bg-gray-900/30 border-gray-800'
              }`}
            >
              <div className="text-center space-y-8">
                {/* Diamond Image */}
                <div className="h-28 flex items-center justify-center">
                  {plan.name === 'Iniciador' ? (
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-700 p-1">
                      <img 
                        src={plan.image} 
                        alt={`${plan.name} Diamond`} 
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  ) : (
                    <img 
                      src={plan.image} 
                      alt={`${plan.name} Diamond`} 
                      className="h-full w-auto object-contain"
                    />
                  )}
                </div>
                
                {/* Plan Name */}
                <h3 className="text-3xl font-light vortexia-serif text-white">{plan.name}</h3>

                {/* Pricing */}
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-gray-400 font-light mb-2">Implementación</p>
                    <div className="flex items-baseline justify-center space-x-1">
                      <span className={`text-3xl font-bold ${plan.highlight ? 'vortexia-text-gradient' : 'text-white'}`}>
                        ${new Intl.NumberFormat('en-US').format(plan.implementationPrice)}
                      </span>
                      <span className="text-gray-400 font-light">USD</span>
                    </div>
                  </div>
                  
                  <div className="text-center pt-2 border-t border-gray-800">
                    <p className="text-gray-400 font-light mb-2">Mantenimiento</p>
                    <div className="flex items-baseline justify-center space-x-1">
                      <span className="text-2xl font-bold text-gray-300">
                        ${new Intl.NumberFormat('en-US').format(plan.maintenancePrice)}
                      </span>
                      <span className="text-gray-500 font-light">{plan.maintenancePeriod}</span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 text-left pt-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-4 group cursor-pointer">
                      <img 
                        src={feature.icon} 
                        alt="" 
                        className="w-6 h-6 object-contain flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300" 
                      />
                      <span className="text-gray-300 font-light group-hover:text-white transition-colors">{feature.text}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <div className="pt-8">
                  <button 
                    onClick={scrollToContact}
                    className={`w-full py-4 rounded-full text-lg font-light vortexia-hover ${
                      plan.highlight
                        ? 'bg-red-600 hover:bg-red-700 vortexia-glow text-white'
                        : 'bg-transparent border border-red-600 text-red-400 hover:bg-red-600 hover:text-white'
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}