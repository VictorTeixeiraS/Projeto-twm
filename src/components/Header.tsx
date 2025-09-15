import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Music} from 'lucide-react';
import AuthModal from './AuthModal'; // Importando o modal

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-glass-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="/" className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center neon-glow">
                  <Music className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-xl font-bold">
                <span className="text-white">Descontr</span>
                <span className="text-primary">AI</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/how-it-works" className="text-foreground hover:text-primary transition-colors">
              Como Funciona
            </a>
            <a href="/artists" className="text-foreground hover:text-primary transition-colors">
              Artistas
            </a>
            <a href="/events" className="text-foreground hover:text-primary transition-colors">
              Eventos
            </a>
            <a href="/pricing" className="text-foreground hover:text-primary transition-colors">
              Preços
            </a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-foreground hover:text-primary" onClick={openAuthModal}>
              Entrar
            </Button>
            <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300" onClick={openAuthModal}>
              Começar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 animate-fade-in">
            <div className="glass rounded-lg p-4 space-y-4">
              <nav className="flex flex-col space-y-3">
                <a href="/how-it-works" className="text-foreground hover:text-primary transition-colors py-2">
                  Como Funciona
                </a>
                <a href="/artists" className="text-foreground hover:text-primary transition-colors py-2">
                  Artistas
                </a>
                <a href="/events" className="text-foreground hover:text-primary transition-colors py-2">
                  Eventos
                </a>
                <a href="/pricing" className="text-foreground hover:text-primary transition-colors py-2">
                  Preços
                </a>
              </nav>
              <div className="flex flex-col space-y-2 pt-4 border-t border-card-border">
                <Button variant="ghost" className="text-foreground hover:text-primary w-full" onClick={openAuthModal}>
                  Entrar
                </Button>
                <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300 w-full" onClick={openAuthModal}>
                  Começar Agora
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
    </header>
  );
};

export default Header;