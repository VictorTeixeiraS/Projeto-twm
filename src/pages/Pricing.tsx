import Header from "@/components/Header";
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Gratuito",
    price: "R$0",
    period: "/mês",
    description: "Ideal para começar e explorar a plataforma.",
    features: [
      "Busca de artistas",
      "Perfis básicos",
      "3 contatos por mês",
    ],
    buttonText: "Começar de graça",
    isFeatured: false,
  },
  {
    name: "Premium",
    price: "R$49",
    period: "/mês",
    description: "Acesso total para organizadores e artistas dedicados.",
    features: [
      "Busca avançada e filtros",
      "Perfis premium",
      "Contatos ilimitados",
      "Suporte prioritário",
      "Análise de dados",
    ],
    buttonText: "Assinar Premium",
    isFeatured: true,
  },
  {
    name: "Profissional",
    price: "R$99",
    period: "/mês",
    description: "Para agências e uso profissional de alto volume.",
    features: [
      "Todas as funcionalidades do Premium",
      "Gestão de múltiplos perfis",
      "Relatórios personalizados",
      "Equipe de suporte dedicada",
    ],
    buttonText: "Assinar Profissional",
    isFeatured: false,
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 mt-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Planos de <span className="text-primary">Assinatura</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano que melhor se adapta às suas necessidades e comece a criar eventos inesquecíveis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`bg-card p-6 border-card-border transition-all duration-300 ${plan.isFeatured ? 'shadow-elevated border-primary/50' : 'hover:shadow-glow'}`}>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="mt-2 text-muted-foreground">{plan.description}</CardDescription>
                <p className="mt-4 text-4xl font-extrabold text-white">{plan.price}<span className="text-lg font-medium text-muted-foreground">{plan.period}</span></p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${plan.isFeatured ? 'bg-gradient-primary' : 'bg-secondary text-white'}`}
                  variant={plan.isFeatured ? "default" : "secondary"}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Pricing;