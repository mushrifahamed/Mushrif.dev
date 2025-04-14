
import { CurvedLine, StarIcon, CircleBackground } from './DecorativeElements';
import { cn } from '@/lib/utils';

const skillCategories = [
  {
    title: "Database Management",
    skills: ["SQL", "MongoDB", "MySQL", "Firebase"]
  },
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "JavaScript", "C++", "C", "PHP"]
  },
  {
    title: "Web Development",
    skills: ["HTML & CSS", "Node.js", "React.js", "Express.js", "Bootstrap", "Tailwind CSS"]
  },
  {
    title: "Mobile Development",
    skills: ["React Native"]
  },
  {
    title: "Development Tools",
    skills: ["Git", "GitHub", "Docker", "Postman", "Figma"]
  },
  {
    title: "Soft Skills",
    skills: ["Team Collaboration", "Problem Solving", "Critical Thinking"]
  }
];

const SkillItem = ({ name }: { name: string }) => (
  <div className="purple-glassmorphism px-4 py-2 hover-lift mauve-shadow">
    <span className="text-sm font-medium">{name}</span>
  </div>
);

const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
      <span className="text-mauve">•</span> {title}
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {skills.map((skill, index) => (
        <SkillItem key={index} name={skill} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <CircleBackground className="w-[500px] h-[500px] -left-64 bottom-32 opacity-10" />
      <StarIcon className="top-20 right-[10%]" size={16} animationDelay="0.5s" />
      <StarIcon className="bottom-40 left-[20%]" size={18} animationDelay="1.5s" />
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My <span className="text-gradient">Skills</span></h2>
          <CurvedLine className="w-40 h-5" />
          <p className="text-gray-300 max-w-2xl mt-4">
            Here are my technical skills and expertise developed through education and hands-on project experience.
          </p>
        </div>

        <div className="bg-dark-lighter rounded-2xl p-6 md:p-8 border border-muted">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={index} 
              title={category.title} 
              skills={category.skills} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
