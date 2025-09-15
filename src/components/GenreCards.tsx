import { useState } from 'react';
import { Music, Guitar, Mic, Drum, Piano, Radio } from 'lucide-react';

const genres = [
  {
    id: 1,
    name: 'Samba',
    description: 'Ritmo brasileiro autêntico',
    icon: Drum,
    color: 'from-orange-500 to-red-500',
    artists: 450,
  },
  {
    id: 2,
    name: 'Forró',
    description: 'Tradição nordestina',
    icon: Guitar,
    color: 'from-yellow-500 to-orange-500',
    artists: 320,
  },
  {
    id: 3,
    name: 'Rock',
    description: 'Energia e atitude',
    icon: Music,
    color: 'from-red-500 to-purple-500',
    artists: 280,
  },
  {
    id: 4,
    name: 'Pop',
    description: 'Sucessos do momento',
    icon: Mic,
    color: 'from-pink-500 to-purple-500',
    artists: 520,
  },
  {
    id: 5,
    name: 'Eletrônica',
    description: 'Beats modernos',
    icon: Radio,
    color: 'from-cyan-500 to-blue-500',
    artists: 380,
  },
  {
    id: 6,
    name: 'Jazz',
    description: 'Sofisticação musical',
    icon: Piano,
    color: 'from-indigo-500 to-purple-500',
    artists: 150,
  },
];

const GenreCards = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Explore </span>
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Gêneros Musicais
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra artistas talentosos em diversos estilos musicais para tornar seu evento inesquecível
          </p>
        </div>

        {/* Genre Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {genres.map((genre, index) => {
            const IconComponent = genre.icon;
            const isHovered = hoveredCard === genre.id;
            
            return (
              <div
                key={genre.id}
                className={`
                  relative group cursor-pointer transition-all duration-500 transform
                  ${isHovered ? 'scale-105 z-10' : 'hover:scale-105'}
                  animate-scale-in
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(genre.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Container */}
                <div className={`
                  relative h-80 rounded-2xl overflow-hidden glass border border-card-border
                  transition-all duration-500 group-hover:shadow-elevated
                  ${isHovered ? 'shadow-elevated border-primary/50' : ''}
                `}>
                  {/* Background Gradient */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-br ${genre.color} opacity-20
                    transition-opacity duration-500 group-hover:opacity-30
                  `}></div>
                  
                  {/* Glow Effect */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-br ${genre.color} opacity-0 blur-xl
                    transition-opacity duration-500 ${isHovered ? 'opacity-20' : ''}
                  `}></div>

                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className={`
                        w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center
                        transition-all duration-500 transform
                        ${isHovered ? 'scale-110 rotate-6' : 'group-hover:scale-110'}
                      `}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                        {genre.name}
                      </h3>
                      <p className="text-muted-foreground mb-4 transition-colors group-hover:text-white">
                        {genre.description}
                      </p>
                      
                      {/* Artists Count */}
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                        <span className="text-sm text-primary font-semibold">
                          {genre.artists} artistas
                        </span>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className={`
                      absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent
                      transition-opacity duration-500
                      ${isHovered ? 'opacity-100' : 'opacity-0'}
                    `}></div>
                  </div>

                  {/* 3D Tilt Effect Border */}
                  <div className={`
                    absolute inset-0 rounded-2xl border-2 border-transparent
                    bg-gradient-to-br ${genre.color} opacity-0 transition-opacity duration-500
                    ${isHovered ? 'opacity-50' : ''}
                  `} style={{ 
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'subtract',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'destination-out',
                  }}></div>
                </div>

                {/* Floating Elements */}
                {isHovered && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full animate-ping"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Call to Action =  */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-muted-foreground mb-6">
            Não encontrou o estilo que procura? Temos muito mais!
          </p>
          <button className="group inline-flex items-center space-x-2 text-primary hover:text-primary-glow transition-colors">
            <span className="font-semibold">Ver todos os gêneros</span>
            <div className="w-1 h-1 bg-primary rounded-full group-hover:w-8 transition-all duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GenreCards;