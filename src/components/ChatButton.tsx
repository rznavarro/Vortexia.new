import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import Chat from './Chat';

export default function ChatButton() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 w-18 h-18 bg-gradient-to-br from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full shadow-2xl z-40 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-red-500/30"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{ 
          boxShadow: '0 0 40px rgba(220, 38, 38, 0.6), 0 0 80px rgba(220, 38, 38, 0.2)',
        }}
      >
        <img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/efef71724_descarga4.png" 
          alt="Vortexia Chat" 
          className="w-8 h-8 object-contain filter brightness-110"
        />
        
        {/* Notification dot */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-lg">
          <div className="w-2.5 h-2.5 bg-red-600 rounded-full animate-pulse"></div>
        </div>
      </motion.button>

      {/* Chat Component */}
      <Chat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}