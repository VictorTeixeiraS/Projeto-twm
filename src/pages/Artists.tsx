import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mic, Heart } from "lucide-react";

const artists = [
  { id: 1, name: "DJ Spark", genre: "Eletrônica", avatarUrl: "https://github.com/shadcn.png" },
  { id: 2, name: "Ana Melodia", genre: "Pop", avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" },
  { id: 3, name: "Banda Ritmo Livre", genre: "Rock", avatarUrl: "https://images.unsplash.com/photo-1549491035-7c0eb87e38ae?q=80&w=1887&auto=format&fit=crop" },
  { id: 4, name: "Samba Raiz", genre: "Samba", avatarUrl: "https://images.unsplash.com/photo-1533174072545-7a4b846c9270?q=80&w=2070&auto=format&fit=crop" },
];

const Artists = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 mt-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Artistas
            </span>{" "}
            disponíveis
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra os talentos mais aclamados e encontre a vibe perfeita para o seu evento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {artists.map((artist) => (
            <Card key={artist.id} className="bg-card glass border-card-border p-4 hover:shadow-elevated transition-shadow duration-300 transform hover:-translate-y-1">
              <CardContent className="flex flex-col items-center p-0">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src={artist.avatarUrl} alt={`@${artist.name}`} />
                  <AvatarFallback>{artist.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold text-white">{artist.name}</h3>
                <p className="text-sm text-muted-foreground">{artist.genre}</p>
                <div className="flex space-x-2 mt-4">
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                    <Heart className="w-5 h-5" />
                  </Button>
                  <Button size="sm" className="bg-gradient-primary">
                    <Mic className="w-4 h-4 mr-2" />
                    Perfil
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Artists;