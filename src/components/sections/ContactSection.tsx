import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    position: '',
    annualRevenue: '',
    currentTech: '',
    employees: '',
    mainChallenge: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://n8n.srv880021.hstgr.cloud/webhook-test/Formulario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'vortexia-contact-form'
        })
      });

      if (response.ok) {
        alert('Mensaje enviado correctamente. Nos contactaremos pronto.');
        setFormData({
          name: '', email: '', company: '', position: '', annualRevenue: '',
          currentTech: '', employees: '', mainChallenge: '', budget: '', timeline: '', message: ''
        });
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <section id="contact" className="py-40 bg-gradient-to-b from-gray-900 via-gray-950 to-black relative overflow-hidden">
      {/* Dynamic iridescent spheres */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b2e43332af375b9fc6052a/9ebf8eaa6_descarga7.png"
          alt=""
          className="absolute top-40 left-20 w-32 h-32 object-contain opacity-15"
          animate={{ 
            rotate: [0, 360],
            y: [-10, 15, -10]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b2e43332af375b9fc6052a/9ebf8eaa6_descarga7.png"
          alt=""
          className="absolute bottom-40 right-20 w-24 h-24 object-contain opacity-20"
          animate={{ 
            scale: [0.7, 1.3, 0.7],
            rotate: [360, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
        />
        <motion.img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b2e43332af375b9fc6052a/9ebf8eaa6_descarga7.png"
          alt=""
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 object-contain opacity-5"
          animate={{ 
            rotate: [0, -360],
            scale: [0.8, 1.1, 0.8]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-light vortexia-serif mb-8">
            <span className="vortexia-text-gradient">Analicemos tu Potencial</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Comparte tu visión y descubramos cómo revolucionar tu negocio con IA.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gray-950/50 backdrop-blur-xl rounded-3xl p-12 border border-gray-800/50 relative">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-red-500/5 rounded-3xl"></div>
            
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-0 border-b-2 border-gray-700 rounded-none text-white placeholder-gray-500 font-light text-lg py-4 focus:border-red-400 focus:outline-none transition-colors duration-300"
                    placeholder="Nombre Completo"
                  />
                </div>
                <div>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-0 border-b-2 border-gray-700 rounded-none text-white placeholder-gray-500 font-light text-lg py-4 focus:border-red-400 focus:outline-none transition-colors duration-300"
                    placeholder="Email Empresarial"
                  />
                </div>
              </div>

              {/* Company Information */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-0 border-b-2 border-gray-700 rounded-none text-white placeholder-gray-500 font-light text-lg py-4 focus:border-red-400 focus:outline-none transition-colors duration-300"
                    placeholder="Empresa"
                  />
                </div>
                <div>
                  <input
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-0 border-b-2 border-gray-700 rounded-none text-white placeholder-gray-500 font-light text-lg py-4 focus:border-red-400 focus:outline-none transition-colors duration-300"
                    placeholder="Cargo/Posición"
                  />
                </div>
              </div>

              {/* Business Metrics */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <select 
                    name="annualRevenue"
                    value={formData.annualRevenue}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b-2 border-gray-700 rounded-none text-white font-light text-lg py-4 focus:border-red-400 focus:outline-none"
                  >
                    <option value="" disabled>Facturación Anual</option>
                    <option value="<1M" className="bg-gray-900">Menos de $1M</option>
                    <option value="1M-5M" className="bg-gray-900">$1M - $5M</option>
                    <option value="5M-10M" className="bg-gray-900">$5M - $10M</option>
                    <option value="10M-50M" className="bg-gray-900">$10M - $50M</option>
                    <option value="50M+" className="bg-gray-900">Más de $50M</option>
                  </select>
                </div>
                <div>
                  <select 
                    name="employees"
                    value={formData.employees}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b-2 border-gray-700 rounded-none text-white font-light text-lg py-4 focus:border-red-400 focus:outline-none"
                  >
                    <option value="" disabled>Número de Empleados</option>
                    <option value="1-10" className="bg-gray-900">1-10</option>
                    <option value="11-50" className="bg-gray-900">11-50</option>
                    <option value="51-200" className="bg-gray-900">51-200</option>
                    <option value="201-1000" className="bg-gray-900">201-1,000</option>
                    <option value="1000+" className="bg-gray-900">1,000+</option>
                  </select>
                </div>
              </div>

              {/* Technology & Budget */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <input
                    name="currentTech"
                    value={formData.currentTech}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b-2 border-gray-700 rounded-none text-white placeholder-gray-500 font-light text-lg py-4 focus:border-red-400 focus:outline-none transition-colors duration-300"
                    placeholder="Tecnologías Actuales (CRM, ERP, etc.)"
                  />
                </div>
                <div>
                  <select 
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b-2 border-gray-700 rounded-none text-white font-light text-lg py-4 focus:border-red-400 focus:outline-none"
                  >
                    <option value="" disabled>Presupuesto para IA</option>
                    <option value="<10K" className="bg-gray-900">Menos de $10K</option>
                    <option value="10K-50K" className="bg-gray-900">$10K - $50K</option>
                    <option value="50K-100K" className="bg-gray-900">$50K - $100K</option>
                    <option value="100K-500K" className="bg-gray-900">$100K - $500K</option>
                    <option value="500K+" className="bg-gray-900">Más de $500K</option>
                  </select>
                </div>
              </div>

              {/* Timeline & Challenge */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <select 
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b-2 border-gray-700 rounded-none text-white font-light text-lg py-4 focus:border-red-400 focus:outline-none"
                  >
                    <option value="" disabled>Timeline de Implementación</option>
                    <option value="ASAP" className="bg-gray-900">Lo antes posible</option>
                    <option value="1-3M" className="bg-gray-900">1-3 meses</option>
                    <option value="3-6M" className="bg-gray-900">3-6 meses</option>
                    <option value="6M+" className="bg-gray-900">Más de 6 meses</option>
                  </select>
                </div>
                <div>
                  <input
                    name="mainChallenge"
                    value={formData.mainChallenge}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b-2 border-gray-700 rounded-none text-white placeholder-gray-500 font-light text-lg py-4 focus:border-red-400 focus:outline-none transition-colors duration-300"
                    placeholder="Principal Desafío Empresarial"
                  />
                </div>
              </div>
              
              {/* Message */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-transparent border-0 border-b-2 border-gray-700 rounded-none text-white placeholder-gray-500 font-light text-lg py-4 focus:border-red-400 focus:outline-none resize-none transition-colors duration-300"
                  placeholder="Describe tu visión y objetivos con IA..."
                />
              </div>
              
              <div className="text-center pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-red-600 hover:bg-red-700 text-white px-16 py-5 rounded-full text-lg font-light vortexia-hover vortexia-glow inline-flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Analizando...
                    </>
                  ) : (
                    <>
                      Iniciar Transformación
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}