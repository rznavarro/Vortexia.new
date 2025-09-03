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
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full shadow-2xl z-40 flex items-center justify-center transition-all duration-500 hover:scale-110 border border-red-500/40 relative group overflow-hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{ 
          boxShadow: '0 0 50px rgba(220, 38, 38, 0.7), 0 0 100px rgba(220, 38, 38, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Mystical rotating background */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-red-600/30 to-red-700/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin" style={{ animationDuration: '8s' }}></div>
        
        <img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/efef71724_descarga4.png" 
          alt="Vortexia Chat" 
          className="w-7 h-7 object-contain filter brightness-150 drop-shadow-lg relative z-10 group-hover:brightness-200 transition-all duration-500"
        />
        
        {/* Notification dot */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-white to-gray-100 rounded-full flex items-center justify-center shadow-xl border border-red-200/50">
          <div className="w-2.5 h-2.5 bg-gradient-to-br from-red-600 to-red-700 rounded-full animate-pulse shadow-sm"></div>
        </div>
      </motion.button>

      {/* Chat Component */}
      <Chat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}