
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

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
      console.error("Resume file not found in public directory");
    }
  }, [location.pathname]);

  const handleNavigateHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-background/80 p-4">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-6xl font-bold mb-6 text-primary">404</h1>
        <p className="text-2xl font-medium text-foreground mb-4">Oops! Page not found</p>
        <p className="text-muted-foreground mb-8">
          {location.pathname === "/resume.pdf" 
            ? "The resume file you're looking for is not available at this moment." 
            : "The page you're looking for doesn't exist or has been moved."}
        </p>
        <Button 
          onClick={handleNavigateHome} 
          className="inline-flex items-center gap-2"
          size="lg"
        >
          <ArrowLeft size={18} /> Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
