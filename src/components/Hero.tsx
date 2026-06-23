import { useEffect, useRef } from 'react';
import { personalInfo } from '@/data';
import { ChevronDown, Download, FileText, ArrowRight } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";
import { handleResumeDownload, handleCvDownload } from "@/utils/downloadUtils";

const Hero = () => {
  const profileRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      profileRef.current?.classList.add('opacity-100', 'translate-y-0');
      textContainerRef.current?.classList.add('opacity-100');
    }, 100);
    return () => clearTimeout(t);
  }, []);

  const handleScrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownload = (e: React.MouseEvent, fn: () => { success: boolean; message: string }, label: string) => {
    e.preventDefault();
    const result = fn();
    toast({
      title: result.success ? `${label} download started` : "Download failed",
      description: result.message,
      variant: result.success ? undefined : "destructive",
    });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-accent/5 via-transparent to-background z-0"></div>
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="container mx-auto relative z-10 pt-24 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        <div ref={profileRef} className="w-full lg:w-1/3 flex justify-center opacity-0 translate-y-8 transition-all duration-700">
          <div className="relative">
            <div className="w-52 h-52 md:w-64 md:h-64 rounded-full border-2 border-primary/40 overflow-hidden glass-panel ring-4 ring-primary/10 shadow-[0_0_60px_-10px_hsl(var(--primary)/0.4)]">
              <img
                alt={personalInfo.name}
                className="w-full h-full object-cover"
                src="/lovable-uploads/84173685-acc4-4fa5-8b0f-ede1a61c4fa1.jpg"
                onError={(e) => {
                  const t = e.currentTarget;
                  t.style.display = 'none';
                  t.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-secondary text-4xl font-bold text-primary">SR</div>`;
                }}
              />
            </div>
            <div className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-full bg-secondary text-xs font-medium text-white flex items-center space-x-1 border border-white/10">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span>Available for hire</span>
            </div>
          </div>
        </div>

        <div ref={textContainerRef} className="w-full lg:w-2/3 text-center lg:text-left opacity-0 transition-opacity duration-1000 delay-300">
          <p className="text-sm md:text-base font-mono text-primary mb-3">Hello, my name is</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{personalInfo.name}</h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-wrap-balance">
            <span className="text-gradient">AI & Data Science Engineer</span>
            <span className="text-foreground/80"> | Building intelligent systems with Python, LLMs & Computer Vision</span>
          </h2>
          <p className="text-base md:text-lg text-foreground/70 mb-8 text-wrap-balance">
            {personalInfo.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 flex-wrap">
            <a
              href="#projects"
              onClick={handleViewProjects}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-all flex items-center gap-2"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="#"
              onClick={(e) => handleDownload(e, handleCvDownload, "CV")}
              className="px-6 py-3 border border-primary/40 bg-primary/10 hover:bg-primary/20 text-primary rounded-md font-medium transition-all flex items-center gap-2"
            >
              <Download size={18} /> Download CV
            </a>
            <a
              href="#"
              onClick={(e) => handleDownload(e, handleResumeDownload, "Resume")}
              className="px-6 py-3 border border-white/10 bg-secondary hover:bg-secondary/80 text-foreground rounded-md font-medium transition-all flex items-center gap-2"
            >
              <FileText size={18} /> Download Resume
            </a>
          </div>
        </div>
      </div>

      <button onClick={handleScrollDown} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center" aria-label="Scroll down">
        <span className="text-xs text-foreground/60 mb-1">Scroll Down</span>
        <ChevronDown className="animate-bounce" size={20} />
      </button>
    </section>
  );
};

export default Hero;
