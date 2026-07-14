import { useState, useRef, useEffect } from 'react';
import { projects, projectCategories } from '@/data';
import type { ProjectCategory } from '@/types';
import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
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

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category.includes(activeCategory));

  return (
    <section id="projects" ref={sectionRef} className="section-spacing bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent to-secondary/5 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={isVisible ? 'animate-fade-in' : ''}>
          <div className="max-w-xl mx-auto text-center mb-12">
            <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">My Work</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">All Projects</h2>
            <p className="text-foreground/70">Browse my complete portfolio of AI, ML and full-stack data projects.</p>
          </div>
        </div>

        {/* Filter bar */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 ${isVisible ? 'animate-fade-in animate-delay-100' : ''}`}>
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground font-medium'
                  : 'bg-secondary/50 text-foreground/70 hover:bg-secondary hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid: 1 col mobile, 2 tablet, 3 desktop, equal-height cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`h-full ${isVisible ? 'animate-fade-in' : ''}`}
              style={{ animationDelay: `${200 + (index % 6) * 80}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
