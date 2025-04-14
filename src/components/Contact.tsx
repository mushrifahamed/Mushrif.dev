import { useState } from 'react';
import { Mail, Phone, Send, Linkedin, Github } from 'lucide-react';
import { CurvedLine, CircleBackground } from './DecorativeElements';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';  // Import EmailJS

const ContactInfo = () => (
  <div className="space-y-6">
    <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
    <p className="text-gray-300 mb-6">
      Feel free to reach out for collaboration opportunities or just to say hello. I'm always open to discussing new projects and ideas.
    </p>
    
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-mauve/20 flex items-center justify-center">
          <Mail size={18} className="text-mauve" />
        </div>
        <div>
          <p className="text-sm text-gray-400">Email</p>
          <a href="mailto:mushrif2002@gmail.com" className="text-white hover:text-mauve transition-colors">
            mushrif2002@gmail.com
          </a>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-mauve/20 flex items-center justify-center">
          <Phone size={18} className="text-mauve" />
        </div>
        <div>
          <p className="text-sm text-gray-400">Phone</p>
          <a href="tel:+94764171391" className="text-white hover:text-mauve transition-colors">
            +94 764 171 391
          </a>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-mauve/20 flex items-center justify-center">
          <Linkedin size={18} className="text-mauve" />
        </div>
        <div>
          <p className="text-sm text-gray-400">LinkedIn</p>
          <a href="https://www.linkedin.com/in/mushrifahamed/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-mauve transition-colors">
            mushrif ahamed
          </a>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-mauve/20 flex items-center justify-center">
          <Github size={18} className="text-mauve" />
        </div>
        <div>
          <p className="text-sm text-gray-400">GitHub</p>
          <a href="https://github.com/mushrifahamed" target="_blank" rel="noopener noreferrer" className="text-white hover:text-mauve transition-colors">
            mushrifahamed
          </a>
        </div>
      </div>
    </div>
  </div>
);

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Send email using EmailJS
    try {
      const result = await emailjs.send(
        'service_e0unaqd',     // Replace with your service ID from EmailJS
        'template_bue6tfd',    // Replace with your template ID from EmailJS
        formData,              // Send form data as template variables
        '18m5e7NKYVI-b7ZQg'         // Replace with your user ID from EmailJS
      );

      console.log(result.text);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: "Error",
        description: "Something went wrong while sending your message. Please try again.",
        variant: "destructive",
      });
    }
    
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="bg-dark border-muted focus:border-mauve"
      />
      
      <Input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="bg-dark border-muted focus:border-mauve"
      />
      
      <Input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        required
        className="bg-dark border-muted focus:border-mauve"
      />
      
      <Textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="min-h-[150px] bg-dark border-muted focus:border-mauve"
      />
      
      <Button 
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-mauve hover:bg-mauve-light text-white px-6 py-6 flex items-center gap-2 w-full sm:w-auto"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
        <Send size={16} />
      </Button>
    </form>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <CircleBackground className="w-[500px] h-[500px] -left-64 bottom-32 opacity-10" />
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Get In <span className="text-gradient">Touch</span></h2>
          <CurvedLine className="w-40 h-5" />
        </div>

        <div className="bg-dark-lighter rounded-2xl p-6 md:p-8 border border-muted max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
