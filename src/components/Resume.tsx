
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';

const Resume = () => {
  const { toast } = useToast();
  const resumeImageUrl = '/lovable-uploads/d05b1788-b238-4c4e-9926-c6ca14a71ace.png';
  const pdfUrl = '/Sajid_Rehman_Resume.pdf';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Sajid_Rehman_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Download started",
      description: "Your resume PDF is being downloaded.",
    });
  };

  return (
    <section id="resume" className="container mx-auto px-6 section-spacing">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">My Resume</h2>
        
        <div className="bg-card rounded-lg p-6 shadow-lg border border-border/50">
          {/* Resume Image Display */}
          <div className="mb-6">
            <div className="relative mx-auto max-w-3xl">
              <img
                src={resumeImageUrl}
                alt="Sajid Rehman's Resume"
                className="w-full h-auto rounded-lg shadow-md border border-border/20"
                style={{ maxHeight: '1200px', objectFit: 'contain' }}
              />
            </div>
          </div>
          
          {/* Download Button */}
          <div className="flex justify-center">
            <Button
              onClick={handleDownload}
              variant="default"
              size="lg"
              className="flex items-center gap-2 px-6 py-3"
            >
              <Download size={18} />
              Download PDF Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
