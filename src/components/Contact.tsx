
import { useState, useRef, useEffect } from 'react';
import { personalInfo, socialLinks } from '@/data';
import { Mail, Send, Github, Linkedin, Twitter, BarChart } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();
  const sectionRef = useRef<HTMLElement>(null);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'twitter':
        return <Twitter size={20} />;
      case 'feather':
        return <Send size={20} />;
      case 'bar-chart':
        return <BarChart size={20} />;
      default:
        return <Mail size={20} />;
    }
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="section-spacing bg-background relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full filter blur-[80px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}>
          <div className="max-w-xl mx-auto text-center mb-12">
            <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              Get in Touch
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-foreground/70">
              Have a project in mind or want to discuss potential collaborations?
              Feel free to reach out!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {/* Contact form */}
          <div className={`opacity-0 ${isVisible ? 'animate-fade-in-right animate-delay-200' : ''}`}>
            <div className="bg-secondary/30 border border-white/10 rounded-lg p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-transparent border border-muted rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-transparent border border-muted rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="Your email"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="w-full px-4 py-3 bg-transparent border border-muted rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
          
          {/* Contact information */}
          <div className={`opacity-0 ${isVisible ? 'animate-fade-in-left animate-delay-300' : ''}`}>
            <div className="h-full flex flex-col">
              <div className="bg-secondary/30 border border-white/10 rounded-lg p-6 md:p-8 mb-6">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-full flex-shrink-0">
                      <Mail size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground/60 mb-1">Email</h4>
                      <a 
                        href={`mailto:${personalInfo.email}`}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-full flex-shrink-0">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-primary"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground/60 mb-1">Location</h4>
                      <p className="text-foreground">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary/30 border border-white/10 rounded-lg p-6 md:p-8 flex-1">
                <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                    >
                      <div className="p-2 rounded-full bg-background text-foreground/80 group-hover:text-primary transition-colors">
                        {getIconComponent(link.icon)}
                      </div>
                      <span className="font-medium">{link.name}</span>
                    </a>
                  ))}
                </div>
                
                <div className="mt-8 flex justify-center">
                  <a
                    href={personalInfo.resumeUrl}
                    className="flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                    download
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
