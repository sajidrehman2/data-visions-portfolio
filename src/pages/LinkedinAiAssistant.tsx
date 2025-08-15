import React from 'react';
import { ArrowLeft, ExternalLink, Globe, Languages, MessageCircle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const LinkedinAiAssistant = () => {
  const features = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Human-Quality Replies",
      description: "Generate natural, contextual LinkedIn responses that sound authentically human"
    },
    {
      icon: <Languages className="w-6 h-6" />,
      title: "Multi-Language Support",
      description: "Available in English, Urdu, Hindi, and Arabic for global communication"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Multiple Tones",
      description: "Choose from friendly, formal, concise, enthusiastic, empathetic, or neutral tones"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Adjustable Length",
      description: "Control word count for brief responses or detailed replies"
    }
  ];

  const tones = ["Friendly", "Formal", "Concise", "Enthusiastic", "Empathetic", "Neutral"];
  const languages = ["English", "Urdu", "Hindi", "Arabic"];

  const handleTryDemo = () => {
    window.open('https://linkedin-ai-assistant-utfdpq76gnn4qo4whqbvsg.streamlit.app/', '_blank');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-background/90 backdrop-blur-md border-b border-muted/20 shadow-sm">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </Link>
          
          <Button onClick={handleTryDemo} className="flex items-center gap-2">
            <ExternalLink className="w-4 h-4" />
            Try Live Demo
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            LinkedIn AI Assistant
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            An AI-powered tool that generates human-quality LinkedIn replies instantly. 
            Paste a conversation, select your tone and language, and receive a personalized draft.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Badge variant="secondary" className="px-3 py-1">AI-Powered</Badge>
            <Badge variant="secondary" className="px-3 py-1">Multi-Language</Badge>
            <Badge variant="secondary" className="px-3 py-1">Instant Generation</Badge>
            <Badge variant="secondary" className="px-3 py-1">Professional</Badge>
          </div>

          <Button 
            onClick={handleTryDemo} 
            size="lg" 
            className="text-lg px-8 py-3 mb-12"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Launch Application
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-card rounded-lg p-6 border border-border/50 hover:border-primary/50 transition-colors"
              >
                <div className="text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Tones & Languages */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-6 border border-border/50">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                Available Tones
              </h3>
              <div className="flex flex-wrap gap-2">
                {tones.map((tone) => (
                  <Badge key={tone} variant="outline" className="px-3 py-1">
                    {tone}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border/50">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Languages className="w-5 h-5 text-primary" />
                Supported Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((language) => (
                  <Badge key={language} variant="outline" className="px-3 py-1">
                    {language}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Try It Live</h2>
          <p className="text-center text-muted-foreground mb-8">
            Experience the LinkedIn AI Assistant in action with our interactive demo
          </p>
          
          <div className="bg-card rounded-lg border border-border/50 overflow-hidden shadow-lg">
            <div className="bg-muted/20 px-6 py-4 border-b border-border/50">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Live Application Demo</h3>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleTryDemo}
                  className="flex items-center gap-1"
                >
                  <ExternalLink className="w-3 h-3" />
                  Open in New Tab
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <iframe 
                src="https://linkedin-ai-assistant-utfdpq76gnn4qo4whqbvsg.streamlit.app/" 
                width="100%" 
                height="700" 
                style={{ border: 'none' }}
                title="LinkedIn AI Assistant"
                className="w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your LinkedIn Communication?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join professionals who are already using AI to craft better LinkedIn responses. 
            Save time while maintaining authentic, engaging communication.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleTryDemo} 
              size="lg" 
              className="text-lg px-8 py-3"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Try the Tool Now
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="text-lg px-8 py-3"
            >
              <Link to="/">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LinkedinAiAssistant;