import { Button } from '@/components/ui/button';
import { Play, Star, Music, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center particles-bg overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-32 h-32 bg-primary-glow/20 rounded-full blur-2xl"></div>
      </div>
      <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-16 h-16 bg-accent/30 rounded-full blur-lg"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Plataforma Revolucionária</span>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-primary text-primary" />
              ))}
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Sua música,</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              seu mundo!
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Conecte-se com os melhores DJs, cantores e bandas para seu evento. 
            <span className="text-primary font-semibold"> Entre e sinta o som</span> da revolução musical.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
              <span className="text-sm text-muted-foreground">+5.000 Artistas</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" style={{ animationDelay: '0.5s' }}></div>
              <span className="text-sm text-muted-foreground">+2.000 Eventos</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
              <span className="text-sm text-muted-foreground">100% Seguro</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-elevated transition-all duration-300 transform hover:scale-105 px-8 py-6 text-lg font-semibold"
            >
              <Music className="w-5 h-5 mr-2" />
              Encontrar Artistas
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 px-8 py-6 text-lg font-semibold group"
            >
              <Play className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Ver Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">Confiado por organizadores de eventos em todo Brasil</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="glass rounded-lg px-4 py-2">
                <span className="text-sm font-medium">São Paulo</span>
              </div>
              <div className="glass rounded-lg px-4 py-2">
                <span className="text-sm font-medium">Rio de Janeiro</span>
              </div>
              <div className="glass rounded-lg px-4 py-2">
                <span className="text-sm font-medium">Belo Horizonte</span>
              </div>
              <div className="glass rounded-lg px-4 py-2">
                <span className="text-sm font-medium">Brasília</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;