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
        className="fixed top-1/2 right-6 transform -translate-y-1/2 w-14 h-14 bg-gradient-to-br from-red-600/90 to-red-700/90 hover:from-red-700 hover:to-red-800 text-white rounded-full shadow-2xl z-40 flex items-center justify-center transition-all duration-500 hover:scale-110 border border-red-500/30 relative group overflow-hidden backdrop-blur-sm"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{ 
          boxShadow: '0 0 30px rgba(220, 38, 38, 0.5), 0 0 60px rgba(220, 38, 38, 0.2), inset 0 0 15px rgba(255, 255, 255, 0.05)',
        }}
      >
        {/* Mystical rotating background */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/15 via-red-600/25 to-red-700/15 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin" style={{ animationDuration: '12s' }}></div>
        
        <img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/efef71724_descarga4.png" 
          alt="Vortexia Chat" 
          className="w-6 h-6 object-contain filter brightness-150 drop-shadow-lg relative z-10 group-hover:brightness-200 transition-all duration-500"
        />
        
        {/* Notification dot */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-white to-gray-100 rounded-full flex items-center justify-center shadow-lg border border-red-200/40">
          <div className="w-2 h-2 bg-gradient-to-br from-red-600 to-red-700 rounded-full animate-pulse shadow-sm"></div>
        </div>
        
        {/* Elegant side indicator */}
        <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-transparent via-red-500/60 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </motion.button>

      {/* Chat Component */}
      <Chat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}