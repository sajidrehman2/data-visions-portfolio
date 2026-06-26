import { useRef, useEffect, useState } from 'react';
import { Code2, Brain, GraduationCap, UserCheck } from 'lucide-react';

const stats = [
  {
    icon: Code2,
    label: '16+ Projects',
    sub: 'Completed end-to-end',
  },
  {
    icon: Brain,
    label: 'AI / ML',
    sub: 'Specialization',
  },
  {
    icon: GraduationCap,
    label: 'BS IT',
    sub: 'Final Year Student',
  },
  {
    icon: UserCheck,
    label: 'Available',
    sub: 'Internships & Freelance',
  },
];

const Stats = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section ref={sectionRef} className="py-8 md:py-12 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`opacity-0 ${isVisible ? 'animate-fade-in' : ''} flex items-center gap-3 bg-secondary/30 border border-primary/20 rounded-lg p-4 hover:border-primary/50 transition-colors`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-2 bg-primary/10 rounded-md shrink-0">
                <stat.icon size={20} className="text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-sm md:text-base font-semibold text-foreground truncate">{stat.label}</p>
                <p className="text-xs text-foreground/60 truncate">{stat.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
