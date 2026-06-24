import { useState } from 'react';
import { projects, projectCategories } from '@/data';
import type { Project, ProjectCategory } from '@/types';
import { Github, ExternalLink, Star } from 'lucide-react';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

/** Initials from a project title — up to 3 letters, e.g. "Smart Hostel Manager" -> "SHM" */
function getInitials(title: string): string {
  const words = title
    .replace(/[—\-–:|()]/g, ' ')
    .split(/\s+/)
    .filter((w) => /^[A-Za-z0-9]/.test(w) && !['the', 'a', 'an', 'on', 'of', 'with', 'and', 'for', 'using'].includes(w.toLowerCase()));
  return words.slice(0, 3).map((w) => w[0].toUpperCase()).join('') || title.slice(0, 2).toUpperCase();
}

const ProjectThumb = ({
  src,
  alt,
  title,
  className = '',
}: {
  src: string;
  alt: string;
  title: string;
  className?: string;
}) => {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/30 via-secondary to-background ${className}`}
      >
        <span className="text-5xl md:text-6xl font-extrabold tracking-wider text-white/90 drop-shadow-lg">
          {getInitials(title)}
        </span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${className}`}
    />
  );
};

const TechBadges = ({ techs, max = 5 }: { techs: string[]; max?: number }) => (
  <div className="flex flex-wrap gap-1.5">
    {techs.slice(0, max).map((tech, i) => (
      <span
        key={i}
        className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
      >
        {tech}
      </span>
    ))}
  </div>
);

const ProjectActions = ({ p }: { p: Project }) => (
  <div className="flex items-center gap-2">
    {p.githubUrl && (
      <a
        href={p.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-secondary text-foreground/80 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
        aria-label={`View ${p.title} on GitHub`}
        title="GitHub"
      >
        <Github size={18} />
      </a>
    )}
    {p.demoUrl && (
      <a
        href={p.demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-secondary text-foreground/80 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
        aria-label={`View ${p.title} live demo`}
        title="Live Demo"
      >
        <ExternalLink size={18} />
      </a>
    )}
  </div>
);

const FeaturedCard = ({ p }: { p: Project }) => (
  <article className="reveal group flex flex-col md:flex-row bg-secondary/40 border border-primary/20 rounded-xl overflow-hidden hover:border-primary/60 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 transition-all">
    <div className="relative w-full md:w-2/5 aspect-video md:aspect-auto md:min-h-[240px] overflow-hidden bg-secondary">
      <ProjectThumb src={p.image} alt={p.title} title={p.title} />
      <div className="absolute top-3 left-3 px-2.5 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full flex items-center gap-1 z-20">
        <Star size={12} /> Featured
      </div>
    </div>
    <div className="flex-1 p-6 flex flex-col">
      <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
      <p className="text-sm md:text-base text-foreground/75 mb-4 line-clamp-4">{p.description}</p>
      <div className="mb-4">
        <TechBadges techs={p.technologies} max={6} />
      </div>
      <div className="mt-auto pt-3 border-t border-white/5">
        <ProjectActions p={p} />
      </div>
    </div>
  </article>
);

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  // Re-run reveal observer when filter changes (new cards mount)
  useRevealOnScroll('.reveal');

  const featured = projects.filter((p) => p.featuredHero);
  const filteredProjects =
    activeCategory === 'All' ? projects : projects.filter((p) => p.category.includes(activeCategory));

  return (
    <section id="projects" className="section-spacing bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent to-secondary/5 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="max-w-xl mx-auto text-center mb-12 reveal">
          <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            My Work
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-foreground/70">
            A showcase of my AI, ML and full-stack data projects with real deployments.
          </p>
        </div>

        {/* Featured (horizontal) row */}
        {featured.length > 0 && (
          <div className="grid grid-cols-1 gap-6 mb-16">
            {featured.map((p) => (
              <FeaturedCard key={p.id} p={p} />
            ))}
          </div>
        )}

        {/* Sub-heading for full list */}
        <div className="max-w-xl mx-auto text-center mb-8 reveal">
          <h3 className="text-2xl md:text-3xl font-bold">All Projects</h3>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 reveal">
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

        {/* Responsive grid: 1 mobile / 2 tablet / 3 desktop. Equal-height cards. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="reveal group h-full flex flex-col bg-secondary/30 border border-white/10 rounded-lg overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary/40"
            >
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
                <p className="text-sm text-foreground/70 mb-4 line-clamp-4 min-h-[5rem]">
                  {project.description}
                </p>
                <div className="mb-4">
                  <TechBadges techs={project.technologies} />
                </div>
                <div className="mt-auto pt-3 border-t border-white/5">
                  <ProjectActions p={project} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
