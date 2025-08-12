import { useState } from "react";
import { Button } from "@/components/ui/button";
import { InputWithMic } from "@/components/ui/input-with-mic";
import { Sparkles, Play } from "lucide-react";
import robotImage from "@/assets/botflix-robot.jpg";

const Index = () => {
  const [mood, setMood] = useState("");

  const handleSearch = () => {
    if (mood.trim()) {
      console.log("Searching for movies with mood:", mood);
      // Aqui você pode implementar a lógica de busca
    }
  };

  const handleMicClick = () => {
    console.log("Voice input activated");
    // Aqui você pode implementar a funcionalidade de voz
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(348_83%_47%_/_0.1)_0%,transparent_50%)]" />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Animated Hero Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src={robotImage} 
                alt="BotFlix AI Robot Assistant" 
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full shadow-glow animate-float"
              />
            </div>
          </div>

          {/* Brand */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-netflix bg-clip-text text-transparent mb-4 tracking-tight">
              BotFlix
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Seu assistente pessoal para encontrar o filme perfeito
            </p>
          </div>

          {/* Search Card */}
          <div className="bg-gradient-card backdrop-blur-lg rounded-2xl border border-white/10 p-8 md:p-12 shadow-elegant max-w-2xl mx-auto animate-scale-in">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center justify-center gap-3">
              <Sparkles className="h-7 w-7 text-primary animate-pulse" />
              O que você tá afim de assistir hoje?
            </h2>
            
            <div className="space-y-6">
              <div className="relative">
                <InputWithMic
                  placeholder="Digite como você está se sentindo ou o que quer assistir..."
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                  onKeyPress={handleKeyPress}
                  onMicClick={handleMicClick}
                  className="text-lg"
                />
              </div>

              {/* Examples */}
              <div className="text-left text-sm text-muted-foreground">
                <p className="mb-2 font-medium">Exemplos:</p>
                <ul className="space-y-1 text-xs opacity-80">
                  <li>• Quero algo engraçado para relaxar depois do trabalho</li>
                  <li>• Estou procurando um thriller que me deixe na ponta da cadeira</li>
                  <li>• Algo romântico para assistir com minha namorada</li>
                </ul>
              </div>

              <Button 
                variant="netflix" 
                size="xl" 
                onClick={handleSearch}
                className="w-full group"
                disabled={!mood.trim()}
              >
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Encontrar Filmes Perfeitos
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "IA Personalizada",
                description: "Recomendações baseadas no seu humor e preferências"
              },
              {
                title: "Busca por Voz",
                description: "Fale naturalmente sobre o que quer assistir"
              },
              {
                title: "Catálogo Completo",
                description: "Milhares de filmes e séries de todas as plataformas"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-card/10 backdrop-blur-sm rounded-xl border border-white/5 p-6 text-center hover:bg-card/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-700" />
    </div>
  );
};

export default Index;