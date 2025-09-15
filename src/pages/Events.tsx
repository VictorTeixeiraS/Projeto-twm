import Header from "@/components/Header";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 mt-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Eventos
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Eventos que buscam talentos musicais.
          </p>
        </div>

        <Alert className="glass" variant="destructive">
          <Info className="h-4 w-4" />
          <AlertTitle>Nenhum evento registrado</AlertTitle>
          <AlertDescription>
            Ainda não há eventos registrados publicamente na plataforma. Volte mais tarde!
          </AlertDescription>
        </Alert>
      </main>
    </div>
  );
};

export default Events;