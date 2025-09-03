import React from 'react';
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-40 vortexia-bg-pattern">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-black"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-red-600 rounded-full opacity-5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-red-500 rounded-full opacity-3 blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating iridescent spheres */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b2e43332af375b9fc6052a/9ebf8eaa6_descarga7.png"
          alt=""
          className="absolute top-1/4 left-1/2 w-20 h-20 object-contain opacity-40"
          animate={{ 
            y: [-10, 10, -10],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b2e43332af375b9fc6052a/9ebf8eaa6_descarga7.png"
          alt=""
          className="absolute bottom-1/3 right-1/4 w-28 h-28 object-contain opacity-25"
          animate={{ 
            rotate: [0, -360],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b2e43332af375b9fc6052a/9ebf8eaa6_descarga7.png"
          alt=""
          className="absolute bottom-1/3 left-1/3 w-16 h-16 object-contain opacity-30"
          animate={{ 
            y: [10, -15, 10],
            x: [-5, 5, -5]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b2e43332af375b9fc6052a/9ebf8eaa6_descarga7.png"
          alt=""
          className="absolute top-1/2 right-1/4 w-12 h-12 object-contain opacity-25"
          animate={{ 
            rotate: [0, -360],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-20"
        >
          {/* Main Headline */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light vortexia-serif leading-tight">
              <span className="text-white block mb-4">Automatización</span>
              <span className="vortexia-text-gradient block">Inteligente</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Transformamos tu negocio con soluciones de IA que optimizan procesos y potencian resultados.
            </p>
          </div>
          
          {/* CTA */}
          <div className="pt-12">
            <button 
              onClick={() => scrollToSection('#services')}
              className="bg-red-600 hover:bg-red-700 text-white px-12 py-5 rounded-full text-lg font-light vortexia-hover vortexia-glow inline-flex items-center gap-3"
            >
              Descubrir Soluciones
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}