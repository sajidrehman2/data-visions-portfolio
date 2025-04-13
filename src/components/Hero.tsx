import { useEffect, useRef } from 'react';
import { personalInfo } from '@/data';
import { ChevronDown, Download } from 'lucide-react';
const Hero = () => {
  const profileRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      profileRef.current?.classList.add('opacity-100', 'translate-y-0');
      textContainerRef.current?.classList.add('opacity-100');
    }, 100);
    return () => clearTimeout(animationTimeout);
  }, []);
  const handleScrollDown = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-accent/5 via-transparent to-background z-0"></div>
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="container mx-auto relative z-10 pt-24 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        {/* Left column: Profile image */}
        <div ref={profileRef} className="w-full lg:w-1/3 flex justify-center opacity-0 translate-y-8 transition-all duration-700">
          <div className="relative">
            <div className="w-60 h-60 md:w-72 md:h-72 rounded-full border-2 border-white/10 overflow-hidden glass-panel">
              <img alt={personalInfo.name} className="w-full h-full object-cover" src="/lovable-uploads/84173685-acc4-4fa5-8b0f-ede1a61c4fa1.jpg" />
            </div>
            <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full bg-secondary text-sm font-medium text-white flex items-center space-x-1 border border-white/10">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span>Available for hire</span>
            </div>
          </div>
        </div>

        {/* Right column: Text content */}
        <div ref={textContainerRef} className="w-full lg:w-1/2 text-center lg:text-left opacity-0 transition-opacity duration-1000 delay-300">
          <div className="overflow-hidden">
            <p className="inline-block text-sm md:text-base font-mono text-primary mb-2 opacity-0 animate-text-reveal animate-delay-300">
              Hello, my name is
            </p>
          </div>
          
          <div className="overflow-hidden">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 opacity-0 animate-text-reveal animate-delay-400">
              {personalInfo.name}
            </h1>
          </div>
          
          <div className="overflow-hidden">
            <h2 className="text-2xl md:text-3xl text-foreground/80 font-light mb-4 opacity-0 animate-text-reveal animate-delay-500">
              {personalInfo.title}
            </h2>
          </div>
          
          <div className="overflow-hidden">
            <p className="text-xl md:text-2xl lg:text-3xl mb-6 opacity-0 animate-text-reveal animate-delay-600 font-light text-wrap-balance">
              <span className="text-gradient">{personalInfo.tagline}</span>
            </p>
          </div>
          
          <div className="opacity-0 animate-fade-in animate-delay-800 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8">
            <a href="#contact" className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-all">
              Get in Touch
            </a>
            
            <a href={personalInfo.resumeUrl} className="px-6 py-3 border border-white/10 bg-secondary hover:bg-secondary/80 text-foreground rounded-md font-medium transition-all flex items-center gap-2" download>
              <Download size={18} />
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <button onClick={handleScrollDown} className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in animate-delay-800" aria-label="Scroll down">
        <span className="text-sm text-foreground/60 mb-2">Scroll Down</span>
        <ChevronDown className="animate-bounce" size={20} />
      </button>
    </section>;
};
export default Hero;