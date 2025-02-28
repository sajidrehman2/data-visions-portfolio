
import { personalInfo, experiences, education, certifications } from '@/data';
import { useState, useRef, useEffect } from 'react';
import { User, Briefcase, GraduationCap, Award } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState<'bio' | 'experience' | 'education' | 'certifications'>('bio');
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="section-spacing bg-background relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-secondary/5 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className={`opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}>
            <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              About Me
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Get to Know Me Better
            </h2>
          </div>

          {/* Tabs navigation */}
          <div className={`flex flex-wrap gap-2 md:gap-4 mb-10 border-b border-muted/20 opacity-0 ${isVisible ? 'animate-fade-in animate-delay-100' : ''}`}>
            <button
              onClick={() => setActiveTab('bio')}
              className={`flex items-center gap-2 px-4 py-3 text-sm md:text-base font-medium transition-all relative ${
                activeTab === 'bio'
                  ? 'text-primary'
                  : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              <User size={16} />
              <span>Bio</span>
              {activeTab === 'bio' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary animate-reveal-background"></span>
              )}
            </button>
            
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-4 py-3 text-sm md:text-base font-medium transition-all relative ${
                activeTab === 'experience'
                  ? 'text-primary'
                  : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              <Briefcase size={16} />
              <span>Experience</span>
              {activeTab === 'experience' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary animate-reveal-background"></span>
              )}
            </button>
            
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-4 py-3 text-sm md:text-base font-medium transition-all relative ${
                activeTab === 'education'
                  ? 'text-primary'
                  : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              <GraduationCap size={16} />
              <span>Education</span>
              {activeTab === 'education' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary animate-reveal-background"></span>
              )}
            </button>
            
            <button
              onClick={() => setActiveTab('certifications')}
              className={`flex items-center gap-2 px-4 py-3 text-sm md:text-base font-medium transition-all relative ${
                activeTab === 'certifications'
                  ? 'text-primary'
                  : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              <Award size={16} />
              <span>Certifications</span>
              {activeTab === 'certifications' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary animate-reveal-background"></span>
              )}
            </button>
          </div>

          {/* Tab content */}
          <div className={`opacity-0 ${isVisible ? 'animate-fade-in animate-delay-200' : ''}`}>
            {activeTab === 'bio' && (
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-foreground/90 whitespace-pre-line">
                  {personalInfo.bio}
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <div className="bg-secondary/30 border border-white/10 rounded-lg p-5 flex-1 min-w-[200px]">
                    <h3 className="text-sm text-foreground/60 mb-2">Location</h3>
                    <p className="font-medium">{personalInfo.location}</p>
                  </div>
                  <div className="bg-secondary/30 border border-white/10 rounded-lg p-5 flex-1 min-w-[200px]">
                    <h3 className="text-sm text-foreground/60 mb-2">Email</h3>
                    <p className="font-medium">{personalInfo.email}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="space-y-12">
                {experiences.map((experience, index) => (
                  <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-primary/30">
                    <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary transform -translate-x-1/2"></div>
                    <h3 className="text-xl font-bold">{experience.title}</h3>
                    <div className="flex flex-wrap gap-2 items-center mt-1 mb-3">
                      <span className="text-foreground/80">{experience.company}</span>
                      <span className="text-foreground/50">•</span>
                      <span className="text-foreground/60 text-sm">{experience.location}</span>
                      <span className="text-foreground/50">•</span>
                      <span className="text-primary text-sm">{experience.duration}</span>
                    </div>
                    <p className="text-foreground/80 mb-4">{experience.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-secondary/50 text-foreground/90 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'education' && (
              <div className="space-y-12">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-primary/30">
                    <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary transform -translate-x-1/2"></div>
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <div className="flex flex-wrap gap-2 items-center mt-1 mb-3">
                      <span className="text-foreground/80">{edu.institution}</span>
                      <span className="text-foreground/50">•</span>
                      <span className="text-foreground/60 text-sm">{edu.location}</span>
                      <span className="text-foreground/50">•</span>
                      <span className="text-primary text-sm">{edu.duration}</span>
                    </div>
                    {edu.description && (
                      <p className="text-foreground/80">{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'certifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-secondary/30 border border-white/10 rounded-lg p-6 transition-transform hover:scale-[1.02]">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-full">
                        <Award size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">{cert.name}</h3>
                        <p className="text-foreground/70 text-sm mb-2">
                          {cert.issuer} • {cert.date}
                        </p>
                        {cert.url && (
                          <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary text-sm hover:underline"
                          >
                            View Certificate
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
