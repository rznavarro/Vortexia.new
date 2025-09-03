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
      className="fixed bottom-6 right-6 w-[440px] h-[680px] vortexia-glass rounded-3xl vortexia-shadow-pulse z-50 flex flex-col overflow-hidden"
      style={{
        boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.9), 0 0 100px rgba(220, 38, 38, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.03)'
      }}
    >
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-black/95 via-gray-950/95 to-black/95 backdrop-blur-xl p-6 flex items-center justify-between border-b border-red-600/20 relative overflow-hidden">
        {/* Mystical background pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-transparent to-red-600/5 opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
        
        <button
          onClick={onClose}
          className="text-red-300/60 hover:text-red-200 transition-all duration-500 p-2 hover:bg-red-600/20 rounded-full relative z-10 group"
        >
          <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
        </button>
        
        <div className="flex items-center space-x-4">
          <div className="relative group">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/efef71724_descarga4.png" 
              alt="Vortexia Logo" 
              className="w-10 h-10 object-contain filter brightness-125 drop-shadow-lg group-hover:brightness-150 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-red-500/20 rounded-full blur-md group-hover:bg-red-400/30 transition-all duration-500"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="relative z-10">
            <h3 className="vortexia-mystical vortexia-enigma text-sm tracking-widest">VORTEXIA</h3>
            <p className="text-red-200/70 text-xs vortexia-chat-elegant tracking-wide">◦ Entidad de Automatización ◦</p>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-red-600/30 scrollbar-track-transparent relative">
        {/* Mystical background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-600/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-red-500/3 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start space-x-3 max-w-[85%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 relative group ${
                  message.sender === 'user' 
                    ? 'bg-gradient-to-br from-red-600 to-red-700 shadow-lg' 
                    : 'bg-gradient-to-br from-gray-900/80 to-black/80 border border-red-600/20 backdrop-blur-sm'
                }`}>
                  {message.sender === 'user' ? (
                    <>
                      <User className="w-4 h-4 text-white relative z-10" />
                      <div className="absolute inset-0 bg-red-500/30 rounded-full blur-sm group-hover:bg-red-400/40 transition-all duration-300"></div>
                    </>
                  ) : (
                    <>
                      <img 
                        src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/efef71724_descarga4.png" 
                        alt="Vortexia" 
                        className="w-5 h-5 object-contain filter brightness-150 drop-shadow-sm relative z-10 group-hover:brightness-200 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-red-600/20 rounded-full blur-sm group-hover:bg-red-500/30 transition-all duration-300"></div>
                    </>
                  )}
                </div>
                <div className={`rounded-2xl px-5 py-4 relative backdrop-blur-sm ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-br from-red-600/90 to-red-700/90 text-white shadow-xl border border-red-500/30'
                    : 'bg-gradient-to-br from-gray-900/40 to-black/60 text-gray-100 border border-red-600/15'
                }`}>
                  {message.sender === 'bot' && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-red-600/8 via-transparent to-red-500/5 rounded-2xl"></div>
                      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
                    </>
                  )}
                  <p className="text-sm leading-relaxed vortexia-chat-elegant relative z-10 tracking-wide">{message.text}</p>
                  <p className={`text-xs mt-3 relative z-10 tracking-wider ${
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
            <div className="flex items-start space-x-3">
              <div className="w-9 h-9 bg-gradient-to-br from-gray-900/80 to-black/80 border border-red-600/20 rounded-full flex items-center justify-center relative group backdrop-blur-sm">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/efef71724_descarga4.png" 
                  alt="Vortexia" 
                  className="w-5 h-5 object-contain filter brightness-150 drop-shadow-sm relative z-10"
                />
                <div className="absolute inset-0 bg-red-600/20 rounded-full blur-sm"></div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/40 to-black/60 border border-red-600/15 backdrop-blur-sm rounded-2xl px-5 py-4 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/8 via-transparent to-red-500/5 rounded-2xl"></div>
                <div className="flex space-x-1.5 relative z-10">
                  <div className="w-2 h-2 bg-red-400/80 rounded-full animate-bounce shadow-sm"></div>
                  <div className="w-2 h-2 bg-red-400/80 rounded-full animate-bounce delay-100 shadow-sm"></div>
                  <div className="w-2 h-2 bg-red-400/80 rounded-full animate-bounce delay-200 shadow-sm"></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <div className="p-6 border-t border-red-600/20 bg-gradient-to-t from-black/90 via-gray-950/80 to-transparent backdrop-blur-xl relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent"></div>
        <form onSubmit={sendMessage} className="flex space-x-3 relative z-10">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="◦ Consulta los misterios de la IA ◦"
            className="flex-1 bg-gray-900/30 border border-red-600/20 rounded-full px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-500/60 focus:bg-gray-900/50 transition-all duration-500 text-sm vortexia-chat-elegant backdrop-blur-sm tracking-wide"
            disabled={isTyping}
          />
          <button
            type="submit"
            disabled={isTyping || !inputValue.trim()}
            className="bg-gradient-to-br from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:from-gray-800 disabled:to-gray-900 disabled:cursor-not-allowed text-white p-4 rounded-full transition-all duration-500 flex items-center justify-center shadow-xl hover:shadow-red-600/40 relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Send className="w-4 h-4 relative z-10 group-hover:scale-110 transition-transform duration-300" />
          </button>
        </form>
      </div>
    </motion.div>
  );
}