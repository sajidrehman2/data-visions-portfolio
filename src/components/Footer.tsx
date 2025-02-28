
import { personalInfo } from '@/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-muted/20 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-lg font-bold text-gradient">
              Alex<span className="text-white">Morgan</span>
            </a>
          </div>
          
          <div className="text-sm text-foreground/60">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
