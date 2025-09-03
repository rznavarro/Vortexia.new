import React from 'react';
import { motion } from "framer-motion";
import { Bot, MessageSquare, BarChart3 } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Bot,
      title: "Automatización de Procesos",
      description: "Optimización inteligente de flujos de trabajo empresariales con IA avanzada."
    },
    {
      icon: MessageSquare,
      title: "Asistentes Conversacionales",
      description: "Experiencias de atención al cliente personalizadas y naturales."
    },
    {
      icon: BarChart3,
      title: "Análisis Predictivo",
      description: "Insights impulsados por machine learning para decisiones estratégicas."
    }
  ];

  return (
    <section id="services" className="py-40 bg-gradient-to-b from-black via-gray-950 to-gray-900 relative overflow-hidden">
      {/* Floating iridescent spheres */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b2e43332af375b9fc6052a/9ebf8eaa6_descarga7.png"
          alt=""
          className="absolute top-20 right-20 w-24 h-24 object-contain opacity-20"
          animate={{ 
            y: [-8, 12, -8],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b2e43332af375b9fc6052a/9ebf8eaa6_descarga7.png"
          alt=""
          className="absolute bottom-20 left-10 w-16 h-16 object-contain opacity-15"
          animate={{ 
            x: [-6, 6, -6],
            scale: [0.9, 1.1, 0.9]
          }}
          transition={{ 
            duration: 22, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-light vortexia-serif mb-8">
            <span className="vortexia-text-gradient">Servicios</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Soluciones elegantes que transforman la manera en que operas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group text-center space-y-6 vortexia-hover cursor-pointer relative"
            >
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-red-600/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center mx-auto group-hover:bg-red-600/20 transition-colors duration-400">
                  <service.icon className="w-7 h-7 text-red-400" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-light vortexia-serif text-white">{service.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed max-w-xs mx-auto text-base">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}