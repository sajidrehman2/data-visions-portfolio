import { useRef, useEffect, useState } from 'react';
import { projects } from '@/data';
import ProjectCard from '@/components/ProjectCard';

const FeaturedProjects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const featuredProjectIds = [
    'sajids-ai-diner',
    'pizza-llm-bot',
    'smart-hostel-manager',
    'linkedin-ai-assistant',
  ];

  const featuredProjects = projects.filter((p) => featuredProjectIds.includes(p.id));

  return (
    <section ref={sectionRef} className="section-spacing bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent to-secondary/5 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={isVisible ? 'animate-fade-in' : ''}>
          <div className="max-w-xl mx-auto text-center mb-12">
            <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              Featured
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-foreground/70">A curated selection of my top AI and full-stack projects.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`h-full ${isVisible ? 'animate-fade-in' : ''}`}
              style={{ animationDelay: `${200 + index * 80}ms` }}
            >
              <ProjectCard project={project} forceFeatured />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
