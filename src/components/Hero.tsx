import { ArrowRight } from 'lucide-react';
import { StarIcon, CircleBackground } from './DecorativeElements';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-20 relative overflow-hidden">
      {/* Decorative elements */}
      <CircleBackground className="w-[500px] h-[500px] -left-64 top-32 opacity-20" />
      <CircleBackground className="w-[600px] h-[600px] -right-96 bottom-0 opacity-10" />
      <StarIcon className="top-32 left-[15%] opacity-60" size={16} animationDelay="0s" />
      <StarIcon className="top-40 right-[25%]" size={14} animationDelay="1s" />
      <StarIcon className="bottom-40 left-[35%]" size={18} animationDelay="2s" />
      <StarIcon className="top-60 right-[15%] opacity-40" size={12} animationDelay="1.5s" />

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2  items-center justify-start md:justify-end">  {/* Reduced gap for tighter layout */}
          <div className="order-2 md:order-1 ml-4 md:ml-8"> {/* Margin left to shift content to the right */}
            <div className="relative mb-4 inline-flex">
              <div className="bg-dark-lighter text-white px-4 py-2 rounded-full text-sm font-medium relative">
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-dark-lighter rotate-45 z-0"></span>
                <span className="relative z-10">Hello!</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              I'm <span className="text-gradient">Mushrif</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-6">Software Engineer Intern</p>

            <p className="text-gray-400 max-w-lg mb-8">
              Results-driven Software Engineer with hands-on experience in building web applications,
              mobile applications, and fintech solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                className="rounded-full bg-mauve hover:bg-mauve-light text-white px-6 py-6 flex items-center gap-2"
                asChild
              >
                <a href="#projects">
                  Portfolio
                  <ArrowRight size={16} />
                </a>
              </Button>
              
              <Button 
                variant="outline"
                className="rounded-full border-mauve hover:bg-mauve/10 text-white px-6 py-6"
                asChild
              >
                <a href="#contact">
                  Hire me
                </a>
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-full h-full">
              {/* Image filling the right side of the hero section */}
              <img 
                src="./src/assets/me.png"  // Ensure you import your image correctly
                alt="Mushrif Ahamed" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
