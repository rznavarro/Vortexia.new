import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MessageCircle, X, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Chat({ isOpen, onClose }: ChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola! Soy el asistente de Vortexia. ¿En qué puedo ayudarte a transformar tu negocio con IA?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await fetch('https://n8n.srv880021.hstgr.cloud/webhook/ChatVortexia', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputValue,
          timestamp: new Date().toISOString(),
          sessionId: 'vortexia-chat-' + Date.now()
        })
      });

      const data = await response.json();
      
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: data.response || 'Gracias por tu mensaje. Nuestro equipo te contactará pronto para discutir cómo podemos transformar tu negocio con IA.',
          sender: 'bot',
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 1500);
    } catch (error) {
      setTimeout(() => {
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: 'Gracias por tu interés. Nuestro equipo revisará tu consulta y te contactará pronto para explorar las posibilidades de automatización para tu empresa.',
          sender: 'bot',
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, errorMessage]);
        setIsTyping(false);
      }, 1500);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-6 right-6 w-[420px] h-[650px] bg-gradient-to-b from-gray-950/98 via-gray-950/95 to-black/98 backdrop-blur-2xl border border-red-600/40 rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden"
      style={{
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(220, 38, 38, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
      }}
    >
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-red-600/90 via-red-700/90 to-red-800/90 backdrop-blur-xl p-8 flex items-center justify-between border-b border-red-500/30">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/efef71724_descarga4.png" 
              alt="Vortexia Logo" 
              className="w-12 h-12 object-contain filter brightness-110"
            />
            <div className="absolute inset-0 bg-white/10 rounded-full blur-sm"></div>
          </div>
          <div>
            <h3 className="text-white vortexia-chat-title text-xl tracking-wide">VORTEXIA</h3>
            <p className="text-red-100/90 text-sm vortexia-chat-elegant">Asistente de Automatización IA</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-white/80 hover:text-white transition-all duration-300 p-2 hover:bg-white/10 rounded-full"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-thin scrollbar-thumb-red-600/40 scrollbar-track-transparent">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start space-x-4 max-w-[85%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.sender === 'user' 
                    ? 'bg-red-600' 
                    : 'bg-gray-800 border border-red-600/30'
                }`}>
                  {message.sender === 'user' ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/efef71724_descarga4.png" 
                      alt="Vortexia" 
                      className="w-5 h-5 object-contain filter brightness-125"
                    />
                  )}
                </div>
                <div className={`rounded-2xl px-6 py-4 relative ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-br from-red-600 to-red-700 text-white shadow-lg'
                    : 'bg-gradient-to-br from-gray-800/60 to-gray-900/60 text-gray-100 border border-gray-700/40 backdrop-blur-sm'
                }`}>
                  {message.sender === 'bot' && (
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent rounded-2xl"></div>
                  )}
                  <p className="text-sm leading-relaxed vortexia-chat-elegant relative z-10">{message.text}</p>
                  <p className={`text-xs mt-3 relative z-10 ${
                    message.sender === 'user' ? 'text-red-100/80' : 'text-gray-400'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing Indicator */}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start"
          >
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gray-800 border border-red-600/30 rounded-full flex items-center justify-center">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/efef71724_descarga4.png" 
                  alt="Vortexia" 
                  className="w-5 h-5 object-contain filter brightness-125"
                />
              </div>
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/40 backdrop-blur-sm rounded-2xl px-6 py-4">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <div className="p-8 border-t border-gray-800/50 bg-gradient-to-t from-gray-950/80 to-transparent backdrop-blur-sm">
        <form onSubmit={sendMessage} className="flex space-x-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Escribe tu consulta sobre IA..."
            className="flex-1 bg-gray-800/40 border border-gray-700/40 rounded-full px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-red-500/60 focus:bg-gray-800/60 transition-all duration-300 text-sm vortexia-chat-elegant backdrop-blur-sm"
            disabled={isTyping}
          />
          <button
            type="submit"
            disabled={isTyping || !inputValue.trim()}
            className="bg-gradient-to-br from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:from-gray-700 disabled:to-gray-800 disabled:cursor-not-allowed text-white p-4 rounded-full transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-red-600/25"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </motion.div>
  );
}