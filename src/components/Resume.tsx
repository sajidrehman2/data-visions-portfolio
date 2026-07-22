import React from 'react';
import { Download } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { handleResumeDownload } from '@/utils/downloadUtils';

const Resume = () => {
  const { toast } = useToast();
  const resumePdfUrl = '/Sajid_Rehman_CV.pdf';

  const handleDownload = async () => {
    const result = await handleResumeDownload();

    toast({
      title: result.success ? "Resume download started" : "Download failed",
      description: result.message,
      variant: result.success ? undefined : "destructive",
    });
  };

  return (
    <section id="resume" className="container mx-auto px-6 section-spacing">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">My Resume</h2>
        
        <div className="bg-card rounded-lg p-6 shadow-lg border border-border/50">
          {/* Resume PDF Preview (all pages, scrollable) */}
          <div className="mb-6">
            <div className="relative mx-auto max-w-3xl rounded-lg overflow-hidden shadow-md border border-border/20 bg-background">
              <object
                data={`${resumePdfUrl}#view=FitH&toolbar=1`}
                type="application/pdf"
                className="w-full"
                style={{ height: '85vh', minHeight: '600px' }}
                aria-label="Sajid Rehman's Resume PDF"
              >
                <iframe
                  src={`${resumePdfUrl}#view=FitH&toolbar=1`}
                  title="Sajid Rehman's Resume PDF"
                  className="w-full"
                  style={{ height: '85vh', minHeight: '600px', border: 0 }}
                />
                <div className="p-6 text-center text-sm text-muted-foreground">
                  Your browser can't display the PDF inline.{' '}
                  <a href={resumePdfUrl} target="_blank" rel="noopener noreferrer" className="underline">
                    Open the resume in a new tab
                  </a>
                  .
                </div>
              </object>
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
