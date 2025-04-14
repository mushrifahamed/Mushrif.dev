
import { ArrowUp, Mail, Phone, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-dark-lighter py-12 border-t border-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-white">
              <span className="text-gradient">M</span>ushrif
            </a>
            <p className="text-gray-400 mt-2">Software Engineer Intern</p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="mailto:mushrif2002@gmail.com" 
              className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-mauve/20 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} className="text-white" />
            </a>
            
            <a 
              href="tel:+94764171391" 
              className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-mauve/20 transition-colors"
              aria-label="Phone"
            >
              <Phone size={18} className="text-white" />
            </a>
            
            <a 
              href="https://linkedin.com/in/mushrif-ahamed" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-mauve/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} className="text-white" />
            </a>
            
            <a 
              href="https://github.com/mushrifahamed" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-mauve/20 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} className="text-white" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-muted pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Mushrif Ahamed. All rights reserved.
          </p>
          
          <Button 
            onClick={handleScrollToTop}
            variant="outline"
            size="icon"
            className="rounded-full border-mauve/30 hover:bg-mauve/10"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
