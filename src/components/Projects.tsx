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
        <div className={`opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}>
          <div className="max-w-xl mx-auto text-center mb-12">
            <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">My Work</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-foreground/70">A showcase of my AI, ML and full-stack data projects with real deployments.</p>
          </div>
        </div>

        {/* Filter bar */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 opacity-0 ${isVisible ? 'animate-fade-in animate-delay-100' : ''}`}>
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
              className={`opacity-0 ${isVisible ? 'animate-fade-in' : ''} h-full`}
              style={{ animationDelay: `${200 + (index % 6) * 80}ms` }}
            >
              <article className="group h-full flex flex-col bg-secondary/30 border border-white/10 rounded-lg overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary/40">
                {/* 16:9 thumbnail */}
                <div className="relative w-full aspect-video overflow-hidden bg-secondary">
                  <ProjectThumb src={project.image} alt={project.title} title={project.title} />
                  {project.featured && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full z-20">
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem]">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground/70 mb-4 line-clamp-2 min-h-[2.5rem]">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 5).map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-2 pt-3 border-t border-white/5">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-secondary text-foreground/80 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                        title="GitHub"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-secondary text-foreground/80 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={`View ${project.title} live demo`}
                        title="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
