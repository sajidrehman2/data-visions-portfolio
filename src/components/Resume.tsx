
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from './ui/use-toast';

const Resume = () => {
  const handleDownload = (format: 'pdf' | 'image') => {
    const fileUrl = format === 'pdf' 
      ? '/Sajid_Rehman_Resume.pdf'
      : '/lovable-uploads/99b6ce2f-eeb2-4c59-b3ac-0a0266baddca.png';
    
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = `Sajid_Rehman_Resume.${format === 'pdf' ? 'pdf' : 'png'}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Download started",
      description: `Your resume will download as a ${format.toUpperCase()} file.`,
    });
  };

  return (
    <section id="resume" className="container mx-auto px-6 section-spacing">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Resume</h2>
        
        <div className="bg-card rounded-lg p-4 shadow-lg border border-border/50">
          <div className="aspect-[1/1.4] relative mb-4">
            <img
              src="/lovable-uploads/99b6ce2f-eeb2-4c59-b3ac-0a0266baddca.png"
              alt="Sajid Rehman's Resume"
              className="absolute inset-0 w-full h-full object-contain rounded-md"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button
              onClick={() => handleDownload('image')}
              variant="secondary"
              className="flex items-center gap-2"
            >
              <Download size={16} />
              Download as Image
            </Button>
            <Button
              onClick={() => handleDownload('pdf')}
              variant="default"
              className="flex items-center gap-2"
            >
              <Download size={16} />
              Download as PDF
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
