import React from "react";
import { Menu, X } from "lucide-react";
import ChatButton from "./ChatButton";

interface LayoutProps {
  children: React.ReactNode;
  currentPageName?: string;
}

export default function Layout({ children, currentPageName }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigationItems = [
    { name: "Inicio", path: "#hero" },
    { name: "Servicios", path: "#services" },
    { name: "Planes", path: "#pricing" },
    { name: "Contacto", path: "#contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white relative overflow-hidden">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=Crimson+Text:wght@400;600&family=Cormorant+Garamond:wght@300;400;500;600&display=swap');
          
          :root {
            --vortexia-black: #0a0a0b;
            --vortexia-dark: #0f0f10;
            --vortexia-darker: #050506;
            --vortexia-crimson: #9b1c1c;
            --vortexia-crimson-light: #b91c1c;
            --vortexia-crimson-dark: #7f1d1d;
            --vortexia-white: #ffffff;
            --vortexia-gray: #525252;
          }
          
          body {
            font-family: 'Cormorant Garamond', 'Crimson Text', Georgia, serif;
            font-weight: 300;
            background: var(--vortexia-black);
            letter-spacing: 0.01em;
            line-height: 1.6;
          }
          
          .vortexia-serif {
            font-family: 'Playfair Display', 'Cormorant Garamond', serif;
            line-height: 1.2;
          }
          
          .vortexia-gradient {
            background: linear-gradient(135deg, var(--vortexia-darker) 0%, var(--vortexia-black) 50%, var(--vortexia-dark) 100%);
          }
          
          .vortexia-text-gradient {
            background: linear-gradient(135deg, var(--vortexia-crimson) 0%, var(--vortexia-crimson-light) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            display: inline-block;
          }
          
          .vortexia-glow {
            box-shadow: 0 0 50px rgba(155, 28, 28, 0.4);
          }
          
          .vortexia-hover {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .vortexia-hover:hover {
            transform: translateY(-3px);
          }

          .vortexia-logo {
            width: 35px;
            height: 35px;
            object-fit: contain;
            filter: brightness(1.1);
          }

          .vortexia-bg-pattern {
            background-image: 
              radial-gradient(circle at 25% 25%, rgba(155, 28, 28, 0.1) 0%, transparent 25%),
              radial-gradient(circle at 75% 75%, rgba(155, 28, 28, 0.05) 0%, transparent 25%);
          }

          .vortexia-chat-elegant {
            font-family: 'Cormorant Garamond', 'Crimson Text', Georgia, serif;
            font-weight: 400;
            letter-spacing: 0.02em;
          }

          .vortexia-chat-title {
            font-family: 'Playfair Display', serif;
            font-weight: 500;
            letter-spacing: 0.01em;
          }

          .vortexia-enigma {
            font-family: 'Playfair Display', serif;
            font-weight: 300;
            letter-spacing: 0.15em;
            text-transform: uppercase;
          }

          .vortexia-mystical {
            background: linear-gradient(45deg, #dc2626, #7c2d12, #dc2626, #991b1b);
            background-size: 400% 400%;
            animation: mystical-flow 8s ease-in-out infinite;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          @keyframes mystical-flow {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }

          .vortexia-shadow-pulse {
            animation: shadow-pulse 3s ease-in-out infinite;
          }

          @keyframes shadow-pulse {
            0%, 100% { box-shadow: 0 0 20px rgba(220, 38, 38, 0.3), inset 0 0 20px rgba(220, 38, 38, 0.1); }
            50% { box-shadow: 0 0 40px rgba(220, 38, 38, 0.6), inset 0 0 30px rgba(220, 38, 38, 0.2); }
          }

          .vortexia-glass {
            background: rgba(15, 15, 16, 0.85);
            backdrop-filter: blur(20px) saturate(180%);
            border: 1px solid rgba(220, 38, 38, 0.2);
          }
        `}
      </style>

      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-red-500 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-red-400 rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-red-600 rounded-full opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-red-500 rounded-full opacity-25 animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-gray-950/90 backdrop-blur-2xl border-b border-gray-800/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('#hero')}>
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/efef71724_descarga4.png" 
                alt="Vortexia Logo" 
                className="vortexia-logo"
              />
              <span className="text-2xl font-light vortexia-serif text-white">VORTEXIA</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.path)}
                  className="text-gray-400 hover:text-red-400 transition-colors duration-400 font-light text-lg"
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('#contact')}
                className="bg-red-600 hover:bg-red-700 text-white px-10 py-3 rounded-full font-light text-lg vortexia-hover"
              >
                Comenzar
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-950/98 backdrop-blur-xl">
            <div className="px-8 py-8 space-y-6">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.path)}
                  className="block text-gray-300 hover:text-red-400 transition-colors duration-400 font-light text-xl"
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('#contact')}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-full font-light text-lg"
              >
                Comenzar
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20 relative">
        {children}
      </main>

      {/* Chat Button */}
      <ChatButton />

      {/* Footer */}
      <footer className="bg-gray-950 py-24 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center space-x-3">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/efef71724_descarga4.png" 
                alt="Vortexia Logo" 
                className="w-6 h-6 object-contain"
              />
              <span className="text-xl font-light vortexia-serif text-white">VORTEXIA</span>
            </div>
            <p className="text-gray-500 font-light max-w-md mx-auto">
              Transformamos procesos empresariales con inteligencia artificial avanzada.
            </p>
            <div className="pt-8 border-t border-gray-800 text-gray-600 font-light">
              <p>&copy; 2024 Vortexia. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}