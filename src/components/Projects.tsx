import { CurvedLine, StarIcon, CircleBackground } from './DecorativeElements';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  period: string;
  description: string;
  features: string[];
  techStack: string[];
  image: string;
  livePreviewUrl: string;  // URL for the live preview
  viewCodeUrl: string;     // URL for the code repository
}

const projects: Project[] = [
  {
    id: 1,
    title: "MSR Tailor Store",
    period: "Jan 2024 - June 2024",
    description: "Comprehensive web application for a tailor shop built using the MERN stack to manage rentals, inventory, and employee tasks. Focused on creating a user-friendly interface and system usability.",
    features: [
      "Rental management system",
      "Inventory tracking",
      "Employee task management"
    ],
    techStack: ["React", "Node.js", "Express.js", "MongoDB"],
    image: "src/assets/projects/MSR Tailor Store.png",
    livePreviewUrl: "https://example.com/msr-tailor-store", // Replace with actual link
    viewCodeUrl: "https://github.com/username/msr-tailor-store", // Replace with actual link
  },
  {
    id: 2,
    title: "ProIntern – Internship App",
    period: "Sep 2024 - Oct 2024",
    description: "Mobile application focused on internship management for students, enabling role-based features like tracking applications and managing internship timelines. Ensured secure data management and smooth user experience.",
    features: [
      "Role-based functionality",
      "Application tracking",
      "Internship timeline management"
    ],
    techStack: ["React Native", "Firebase"],
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    livePreviewUrl: "https://example.com/prointern", // Replace with actual link
    viewCodeUrl: "https://github.com/username/prointern", // Replace with actual link
  },
  {
    id: 3,
    title: "Online Food Ordering System",
    period: "July 2023 - Nov 2023",
    description: "Web-based food ordering system allowing users to browse menus, place orders, and manage accounts. Implemented user registration, authentication, and order management for enhanced usability.",
    features: [
      "Menu browsing",
      "Order placement and tracking",
      "User account management"
    ],
    techStack: ["HTML", "CSS", "JavaScript", "Java", "MySQL"],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80",
    livePreviewUrl: "https://example.com/food-ordering-system", // Replace with actual link
    viewCodeUrl: "https://github.com/username/food-ordering-system", // Replace with actual link
  },
  {
    id: 4,
    title: "Online Tailor Store",
    period: "Jan 2023 - June 2023",
    description: "Fully functional web application for an online tailor store to manage user registration, catalog browsing, and order placement. The system allows customers to place orders, and shop owners to manage these orders.",
    features: [
      "User registration and authentication",
      "Product catalog",
      "Order management"
    ],
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: "https://images.unsplash.com/photo-1612769156914-90231d5929d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    livePreviewUrl: "https://example.com/online-tailor-store", // Replace with actual link
    viewCodeUrl: "https://github.com/username/online-tailor-store", // Replace with actual link
  }
];

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="bg-dark-lighter border border-muted rounded-2xl overflow-hidden hover-lift">
    <div className="h-48 overflow-hidden">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
    </div>
    
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <span className="text-xs text-gray-400">{project.period}</span>
      </div>
      
      <p className="text-gray-300 text-sm mb-4">{project.description}</p>
      
      <div className="mb-4">
        <h4 className="text-sm font-medium mb-2 text-mauve">Key Features:</h4>
        <ul className="space-y-1">
          {project.features.map((feature, index) => (
            <li key={index} className="text-xs text-gray-400 flex items-center gap-2">
              <span className="w-1 h-1 bg-mauve rounded-full"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-2 text-mauve">Tech Stack:</h4>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs bg-dark border border-mauve/20 rounded-full px-2 py-0.5"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex gap-3 mt-auto">
        <a href={project.livePreviewUrl} target="_blank" rel="noopener noreferrer">
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full border-mauve/50 hover:bg-mauve/10 text-white text-xs flex gap-1"
          >
            <ExternalLink size={14} />
            View Project
          </Button>
        </a>
        
        <a href={project.viewCodeUrl} target="_blank" rel="noopener noreferrer">
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full border-mauve/50 hover:bg-mauve/10 text-white text-xs flex gap-1"
          >
            <Github size={14} />
            View Code
          </Button>
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <CircleBackground className="w-[500px] h-[500px] -left-64 top-32 opacity-10" />
      <StarIcon className="top-40 right-[25%]" size={14} animationDelay="1s" />
      <StarIcon className="bottom-20 left-[35%]" size={16} animationDelay="2.5s" />
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My <span className="text-gradient">Projects</span></h2>
          <CurvedLine className="w-40 h-5" />
          <p className="text-gray-300 max-w-2xl mt-4">
            Here are some of my recent projects that showcase my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button 
            className="rounded-full bg-mauve hover:bg-mauve-light text-white px-6 flex items-center gap-2"
          >
            View All Projects
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
