
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from './ui/use-toast';

const Resume = () => {
  const handleDownload = () => {
    const fileUrl = '/lovable-uploads/aec9cbd2-3994-4ed9-8f32-172add3bb0eb.png';
    
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Sajid_Rehman_Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Download started",
      description: "Your resume will download as an image file.",
    });
  };

  return (
    <section id="resume" className="container mx-auto px-6 section-spacing">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Resume</h2>
        
        <div className="bg-card rounded-lg p-4 shadow-lg border border-border/50">
          <div className="aspect-[1/1.4] relative mb-4">
            <img
              src="/lovable-uploads/aec9cbd2-3994-4ed9-8f32-172add3bb0eb.png"
              alt="Sajid Rehman's Resume"
              className="absolute inset-0 w-full h-full object-contain rounded-md"
            />
          </div>
          
          <div className="flex justify-center">
            <Button
              onClick={handleDownload}
              variant="default"
              className="flex items-center gap-2"
            >
              <Download size={16} />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
