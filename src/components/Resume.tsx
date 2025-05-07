
import React from 'react';
import { Download, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from './ui/use-toast';
import { handleResumeDownload } from '@/utils/downloadUtils';

const Resume = () => {
  const cvImageUrl = '/lovable-uploads/aec9cbd2-3994-4ed9-8f32-172add3bb0eb.png';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvImageUrl;
    link.download = 'Sajid_Rehman_Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Download started",
      description: "Your resume will download as an image file.",
    });
  };

  const handleOpenInNewTab = () => {
    const result = handleResumeDownload();
    
    if (result.success) {
      toast({
        title: "Resume opened",
        description: "Your resume has opened in a new tab.",
      });
    } else {
      toast({
        title: "Opening failed",
        description: result.message,
        variant: "destructive",
      });
    }
  };

  return (
    <section id="resume" className="container mx-auto px-6 section-spacing">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Resume</h2>
        
        <div className="bg-card rounded-lg p-6 shadow-lg border border-border/50">
          <p className="text-center mb-6 text-muted-foreground">
            Click below to view or download my complete resume
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={handleOpenInNewTab}
              variant="secondary"
              className="flex items-center gap-2"
            >
              <ExternalLink size={16} />
              View Resume
            </Button>
            <Button
              onClick={handleDownload}
              variant="default"
              className="flex items-center gap-2"
            >
              <Download size={16} />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
