import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Music, Handshake } from "lucide-react";
const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 mt-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Como Funciona o <span className="text-primary">DescontrAI</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma maneira simples e transparente de conectar artistas e organizadores.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="glass p-6 text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle>Para Organizadores</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Busque, filtre e encontre o artista ideal para o seu evento.
                Converse, negocie e contrate diretamente pela plataforma de forma segura.
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass p-6 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <CardHeader>
              <Music className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle>Para Artistas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Crie um perfil detalhado com portfólio, vídeos e avaliações.
                Conecte-se com novos clientes e expanda sua carreira.
              </p>
            </CardContent>
          </Card>

          <Card className="glass p-6 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <CardHeader>
              <Handshake className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle>Contratação Segura</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Utilize nosso sistema de orçamentos e avaliações para uma contratação transparente.
                Tenha a certeza de que a qualidade musical do seu evento está garantida.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default HowItWorks;