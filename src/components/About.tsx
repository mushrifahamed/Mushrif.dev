import { Download } from 'lucide-react';
import { CurvedLine, CircleBackground } from './DecorativeElements';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <CircleBackground className="w-[400px] h-[400px] -right-64 top-32 opacity-10" />
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About <span className="text-gradient">Me</span></h2>
          <CurvedLine className="w-40 h-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-xl overflow-hidden border border-mauve/30">
              <img 
                src="assets/About.jpg" 
                alt="About Mushrif Ahamed" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-mauve rounded-xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-mauve/10 rounded-xl -z-10"></div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Software Engineer Intern</h3>
            
            <p className="text-gray-300 mb-6">
              Results-driven Software Engineer with hands-on experience in building web applications, mobile applications, and fintech solutions. Skilled in Java, JavaScript, and modern development frameworks. Strong collaborator, passionate about creating high-performance, user-centric digital products. Eager to contribute technical expertise to impactful projects.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-mauve"></div>
                <span className="text-gray-300">
                  <strong className="text-white">Phone:</strong> +94764171391
                </span>
              </div>
              
            
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-mauve"></div>
                <span className="text-gray-300">
                  <strong className="text-white">Email:</strong> mushrif2002@gmail.com
                </span>
              </div>
            </div>

            <a href="assets/Mushrif Ahamed.pdf" download>
              <Button 
                className="rounded-full bg-mauve hover:bg-mauve-light text-white px-6 flex items-center gap-2"
              >
                Download Resume
                <Download size={16} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
