
import { useState, useRef, useEffect } from 'react';
import { projects, projectCategories } from '@/data';
import type { ProjectCategory } from '@/types';
import { Github, ExternalLink } from 'lucide-react';

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category.includes(activeCategory));

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="section-spacing bg-background relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent to-secondary/5 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}>
          <div className="max-w-xl mx-auto text-center mb-16">
            <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              My Work
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-foreground/70">
              A showcase of my data science and AI projects, demonstrating real-world
              applications and problem-solving capabilities.
            </p>
          </div>
        </div>

        {/* Category filters */}
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

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}
              style={{ animationDelay: `${200 + (index % 6) * 100}ms` }}
            >
              <div className="group bg-secondary/30 border border-white/10 rounded-lg overflow-hidden transition-all hover:translate-y-[-5px] hover:shadow-xl">
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-70 transition-opacity z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full z-20">
                      Featured
                    </div>
                  )}
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex gap-2 z-20">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-muted text-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-muted text-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={`View ${project.title} demo`}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-secondary text-xs text-foreground/80 rounded-full">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-secondary text-xs text-foreground/80 rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
