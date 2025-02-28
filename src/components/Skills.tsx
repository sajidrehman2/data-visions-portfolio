
import { useState, useRef, useEffect } from 'react';
import { skills } from '@/data';
import type { Skill, SkillCategory } from '@/types';

const Skills = () => {
  const categories: SkillCategory[] = [
    "Programming Languages",
    "Machine Learning",
    "Deep Learning",
    "Data Science",
    "Cloud & DevOps",
    "Big Data"
  ];
  
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("Programming Languages");
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

  const filterSkills = (category: SkillCategory) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="section-spacing bg-background relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-40 right-20 w-64 h-64 bg-primary/5 rounded-full filter blur-[80px]"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/5 rounded-full filter blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}>
          <div className="max-w-xl mx-auto text-center mb-16">
            <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              Skills & Expertise
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical Proficiencies
            </h2>
            <p className="text-foreground/70">
              A comprehensive overview of my technical skills and expertise in AI, 
              machine learning, and data science.
            </p>
          </div>
        </div>

        {/* Category tabs */}
        <div className={`flex flex-wrap justify-center gap-2 md:gap-4 mb-12 opacity-0 ${isVisible ? 'animate-fade-in animate-delay-100' : ''}`}>
          {categories.map((category) => (
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

        {/* Skills grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-0 ${isVisible ? 'animate-fade-in animate-delay-200' : ''}`}>
          {filterSkills(activeCategory).map((skill, index) => (
            <SkillCard 
              key={skill.name} 
              skill={skill} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard = ({ skill, index }: SkillCardProps) => {
  const progressRef = useRef<HTMLDivElement>(null);
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

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  return (
    <div 
      className={`bg-secondary/30 border border-white/10 rounded-lg p-6 hover:bg-secondary/40 transition-all animate-delay-${(index % 5) * 100}`}
      style={{ animationDelay: `${(index % 8) * 100}ms` }}
    >
      <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
        {skill.name}
      </h3>
      
      <div className="relative h-2 bg-muted/40 rounded-full overflow-hidden" ref={progressRef}>
        <div 
          className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-1000"
          style={{ 
            width: isVisible ? `${skill.level}%` : '0%',
            '--progress-width': `${skill.level}%`
          } as React.CSSProperties}
        ></div>
      </div>
      
      <div className="flex justify-between mt-2">
        <span className="text-xs text-foreground/60">Beginner</span>
        <span className="text-xs text-primary">{skill.level}%</span>
        <span className="text-xs text-foreground/60">Expert</span>
      </div>
    </div>
  );
};

export default Skills;
