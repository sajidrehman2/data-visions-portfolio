import { experiences } from '@/data';
import { Briefcase } from 'lucide-react';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

const Experience = () => {
  useRevealOnScroll('.reveal');

  return (
    <section id="experience" className="section-spacing bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-14 reveal">
          <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            My Journey
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <p className="text-foreground/70">
            Roles, internships and study that shaped my AI engineering work.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-primary/30" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="reveal relative pl-12 md:pl-16">
                {/* Dot marker */}
                <div className="absolute left-4 md:left-6 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-[0_0_0_2px_hsl(var(--primary)/0.4)]" />

                <div className="bg-secondary/30 border border-white/10 rounded-lg p-5 md:p-6 hover:border-primary/40 transition-colors">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-primary/15 p-2 rounded-md text-primary mt-0.5">
                      <Briefcase size={16} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold">{exp.title}</h3>
                      <div className="flex flex-wrap gap-x-2 gap-y-1 items-center mt-1">
                        <span className="text-foreground/85 font-medium">{exp.company}</span>
                        <span className="text-foreground/40">•</span>
                        <span className="text-foreground/60 text-sm">{exp.location}</span>
                      </div>
                      <p className="text-primary text-sm font-mono mt-1">{exp.duration}</p>
                    </div>
                  </div>

                  <p className="text-foreground/80 text-sm md:text-base mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((t, k) => (
                      <span
                        key={k}
                        className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
