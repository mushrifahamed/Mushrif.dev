
import { CurvedLine, CircleBackground } from './DecorativeElements';
import { GraduationCap, Calendar } from 'lucide-react';

interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  details?: string;
}

const educationItems: EducationItem[] = [
  {
    id: 1,
    institution: "SLIIT",
    degree: "BSc (Hons) in IT, Specializing in Software Engineering",
    duration: "2022 - 2026 (Expected)",
    details: "GPA: 3.0/4.0 (Year 3, Semester 1)"
  },
  {
    id: 2,
    institution: "Esoft Metro Campus",
    degree: "Diploma in IT",
    duration: "Jan 2019 - Mar 2019"
  },
  {
    id: 3,
    institution: "St. Anthony's College, Kandy",
    degree: "A/L Physical Science – English Medium",
    duration: "2008 - 2021"
  }
];

const EducationCard = ({ item }: { item: EducationItem }) => (
  <div className="bg-dark-lighter border border-muted rounded-xl p-6 hover-lift">
    <div className="w-12 h-12 bg-mauve/20 rounded-full flex items-center justify-center mb-4">
      <GraduationCap className="text-mauve" size={24} />
    </div>
    
    <h3 className="text-xl font-semibold mb-2">{item.institution}</h3>
    <p className="text-gray-300 mb-3">{item.degree}</p>
    
    <div className="flex items-center gap-2 text-gray-400 text-sm">
      <Calendar size={14} />
      <span>{item.duration}</span>
    </div>
    
    {item.details && (
      <p className="text-mauve text-sm mt-3">
        {item.details}
      </p>
    )}
  </div>
);

const Education = () => {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <CircleBackground className="w-[400px] h-[400px] -right-64 bottom-32 opacity-10" />
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My <span className="text-gradient">Education</span></h2>
          <CurvedLine className="w-40 h-5" />
          <p className="text-gray-300 max-w-2xl mt-4">
            My educational background and qualifications that have shaped my technical foundation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {educationItems.map((item) => (
            <EducationCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
