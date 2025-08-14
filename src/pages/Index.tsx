import { useState } from "react";
import { Button } from "@/components/ui/button";
import { InputWithMic } from "@/components/ui/input-with-mic";
import { Play, Sparkles, Zap, Film, Brain } from "lucide-react";
import robotImage from "@/assets/botflix-robot.jpg";

const Index = () => {
  const [mood, setMood] = useState("");
  const [isListening, setIsListening] = useState(false);

  const handleSearch = () => {
    if (mood.trim()) {
      console.log("Searching for:", mood);
    }
  };

  const handleMicClick = () => {
    setIsListening(!isListening);
    console.log("Mic clicked");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Cinema Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          muted 
          loop 
          className="w-full h-full object-cover opacity-20"
        >
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      </div>

      {/* Glassmorphism Background Effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/8 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        {/* Robot Avatar with Glassmorphism */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl scale-110" />
          <div className="relative w-32 h-32 rounded-full overflow-hidden border border-white/10 backdrop-blur-sm bg-white/5 p-1">
            <img 
              src={robotImage} 
              alt="BotFlix AI Robot" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Brand Section with Glassmorphism */}
        <div className="text-center mb-8">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            BotFlix
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Descubra filmes perfeitos com nossa IA. Descreva seu humor e encontre sua próxima experiência cinematográfica.
          </p>
        </div>

        {/* Search Card with Enhanced Glassmorphism */}
        <div className="w-full max-w-md relative">
          {/* Glassmorphism container */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-2xl blur-sm" />
          <div className="relative backdrop-blur-xl bg-white/[0.08] border border-white/20 rounded-2xl p-8 shadow-2xl">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl" />
            
            <div className="relative space-y-6">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Sparkles className="w-6 h-6 text-primary animate-pulse" />
                  <h2 className="text-xl font-semibold text-foreground">
                    Qual é o seu humor hoje?
                  </h2>
                </div>
              </div>

              <div className="space-y-4">
                <InputWithMic
                  placeholder="Ex: Quero algo emocionante e cheio de ação..."
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                  onMicClick={handleMicClick}
                  className="bg-white/5 border-white/20 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:bg-white/10 transition-all duration-300"
                />

                <Button 
                  onClick={handleSearch}
                  disabled={!mood.trim()}
                  className="w-full bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-glow group"
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Descobrir Filmes
                </Button>
              </div>

              <div className="text-sm text-muted-foreground/80">
                <p className="font-medium mb-2">Exemplos:</p>
                <ul className="space-y-1 text-xs opacity-80">
                  <li>• "Quero chorar com um drama tocante"</li>
                  <li>• "Preciso rir muito hoje"</li>
                  <li>• "Algo que me faça pensar"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid with Glassmorphism */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 w-full max-w-4xl">
          {[
            {
              icon: Brain,
              title: "IA Inteligente",
              description: "Algoritmo avançado que entende suas emoções e preferências"
            },
            {
              icon: Zap,
              title: "Instantâneo",
              description: "Recomendações personalizadas em segundos"
            },
            {
              icon: Film,
              title: "Catálogo Vasto",
              description: "Acesso a milhares de filmes de todos os gêneros"
            }
          ].map((feature, index) => (
            <div key={index} className="relative group">
              {/* Glassmorphism card */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/3 to-transparent rounded-xl blur-sm group-hover:blur-none transition-all duration-300" />
              <div className="relative backdrop-blur-lg bg-white/[0.05] border border-white/10 rounded-xl p-6 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <feature.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;