import { skills } from '@/data';
import type { SkillCategory } from '@/types';
import {
  Code, Code2, Database, Brain, Flame, Sigma, Layers, Link as LinkIcon, Smile, Sparkles,
  Search, Eye, Scan, Image as ImageIcon, GitBranch, Container, Cloud, LayoutDashboard, Zap, Triangle,
  type LucideIcon,
} from 'lucide-react';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

const iconMap: Record<string, LucideIcon> = {
  code: Code, "code-2": Code2, database: Database, brain: Brain, flame: Flame, sigma: Sigma,
  layers: Layers, link: LinkIcon, smile: Smile, sparkles: Sparkles, search: Search, eye: Eye,
  scan: Scan, image: ImageIcon, "git-branch": GitBranch, container: Container, cloud: Cloud,
  "layout-dashboard": LayoutDashboard, zap: Zap, triangle: Triangle,
};

const categoryOrder: SkillCategory[] = ["Languages", "ML/DL", "NLP/LLM", "Computer Vision", "Tools & Cloud"];

const Skills = () => {
  useRevealOnScroll('.reveal');

  return (
    <section id="skills" className="section-spacing bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-40 right-20 w-64 h-64 bg-primary/5 rounded-full filter blur-[80px]"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/5 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16 reveal">
          <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">Skills & Expertise</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Proficiencies</h2>
          <p className="text-foreground/70">The languages, frameworks and tools I use to build AI products end-to-end.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categoryOrder.map((category) => {
            const items = skills.filter(s => s.category === category);
            if (items.length === 0) return null;
            return (
              <div
                key={category}
                className="reveal bg-secondary/30 border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-colors"
              >
                <h3 className="text-lg font-bold mb-5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => {
                    const Icon = iconMap[skill.icon || ''] ?? Sparkles;
                    return (
                      <div
                        key={skill.name}
                        className="reveal flex items-center gap-2 px-3 py-2 bg-background/50 border border-white/10 rounded-lg text-sm hover:border-primary/40 hover:bg-primary/5 transition-colors"
                      >
                        <Icon size={16} className="text-primary" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
