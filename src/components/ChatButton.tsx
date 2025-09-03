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
        className="fixed bottom-6 right-6 w-16 h-16 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-2xl z-40 flex items-center justify-center transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{ 
          boxShadow: '0 0 30px rgba(220, 38, 38, 0.5)',
        }}
      >
        <MessageCircle className="w-6 h-6" />
        
        {/* Notification dot */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
        </div>
      </motion.button>

      {/* Chat Component */}
      <Chat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}