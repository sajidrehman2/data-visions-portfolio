
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // If trying to access resume.pdf, show a specific message in console
    if (location.pathname === "/resume.pdf") {
      console.error("Resume file not found in public directory - redirecting to download URL");
    }
  }, [location.pathname]);

  const handleNavigateHome = () => {
    navigate("/");
  };

  const handleResumeDownload = () => {
    // Direct link to resume in the public folder
    const resumeUrl = "/Sajid_Rehman_Resume.pdf";
    
    // Create an anchor element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'Sajid_Rehman_Resume.pdf');
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    
    try {
      link.click();
      document.body.removeChild(link);
      toast({
        title: "Resume download started",
        description: "Your resume download has been initiated.",
      });
    } catch (error) {
      console.error('Download failed:', error);
      toast({
        title: "Download failed",
        description: "Unable to download the resume. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-background/80 p-4">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-6xl font-bold mb-6 text-primary">404</h1>
        <p className="text-2xl font-medium text-foreground mb-4">Oops! Page not found</p>
        <p className="text-muted-foreground mb-8">
          {location.pathname === "/resume.pdf" 
            ? "The resume file you're looking for is available for direct download below." 
            : "The page you're looking for doesn't exist or has been moved."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={handleNavigateHome} 
            className="inline-flex items-center gap-2"
            size="lg"
          >
            <ArrowLeft size={18} /> Return to Home
          </Button>
          
          {location.pathname === "/resume.pdf" && (
            <Button 
              onClick={handleResumeDownload} 
              className="inline-flex items-center gap-2"
              size="lg"
              variant="outline"
            >
              <Download size={18} /> Download Resume
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
