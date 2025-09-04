import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Chat from './Chat';

export default function ChatButton() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-2xl z-50 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-red-500/50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{ 
          boxShadow: '0 0 30px rgba(220, 38, 38, 0.6), 0 0 60px rgba(220, 38, 38, 0.3)',
        }}
      >
        <img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/efef71724_descarga4.png" 
          alt="Vortexia Chat" 
          className="w-8 h-8 object-contain filter brightness-150"
        />
      </motion.button>

      {/* Chat Component */}
      <Chat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}