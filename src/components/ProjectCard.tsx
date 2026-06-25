import { useState } from 'react';
import { Github, ExternalLink, Image as ImageIcon } from 'lucide-react';
import type { Project } from '@/types';

const ProjectThumb = ({ src, alt, title }: { src: string; alt: string; title: string }) => {
  const [failed, setFailed] = useState(false);
  if (failed || !src) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-secondary to-background text-center p-6">
        <ImageIcon className="text-primary/60 mb-3" size={36} />
        <span className="text-sm font-semibold text-foreground/90 line-clamp-3">{title}</span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
  );
};

interface ProjectCardProps {
  project: Project;
  forceFeatured?: boolean;
}

const ProjectCard = ({ project, forceFeatured = false }: ProjectCardProps) => {
  const showFeaturedBadge = forceFeatured || project.featured;

  return (
    <article className="group h-full flex flex-col bg-secondary/30 border border-white/10 rounded-lg overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary/40">
      <div className="relative w-full aspect-video overflow-hidden bg-secondary">
        <ProjectThumb src={project.image} alt={project.title} title={project.title} />
        {showFeaturedBadge && (
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
  );
};

export default ProjectCard;
