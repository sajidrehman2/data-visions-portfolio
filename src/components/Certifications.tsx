import { certifications } from '@/data';
import { Award, ExternalLink } from 'lucide-react';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

const Certifications = () => {
  useRevealOnScroll('.reveal');

  return (
    <section id="certifications" className="section-spacing bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-12 reveal">
          <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Credentials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-foreground/70">
            Specializations and courses backing my AI, ML and data work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((c, i) => {
            const Wrapper: React.ElementType = c.url ? 'a' : 'div';
            return (
              <Wrapper
                key={i}
                {...(c.url ? { href: c.url, target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="reveal group block bg-secondary/30 border border-white/10 rounded-lg p-5 hover:border-primary/50 hover:bg-secondary/50 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="bg-primary/15 p-2 rounded-md text-primary">
                    <Award size={18} />
                  </div>
                  {c.url && (
                    <ExternalLink
                      size={14}
                      className="text-foreground/40 group-hover:text-primary transition-colors"
                    />
                  )}
                </div>
                <h3 className="font-semibold text-sm md:text-base leading-snug mb-2 line-clamp-2 min-h-[2.5rem]">
                  {c.name}
                </h3>
                <p className="text-xs text-foreground/65 line-clamp-2">{c.issuer}</p>
                <p className="text-xs text-primary font-mono mt-2">{c.date}</p>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
