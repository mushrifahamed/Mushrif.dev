
import { Briefcase, Calendar } from 'lucide-react';
import { CurvedLine, CircleBackground } from './DecorativeElements';

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <CircleBackground className="w-[400px] h-[400px] -right-64 top-32 opacity-10" />
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Work <span className="text-gradient">Experience</span></h2>
          <CurvedLine className="w-40 h-5" />
        </div>

        <div className="bg-dark-lighter rounded-2xl p-6 md:p-8 border border-muted max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <div className="sticky top-24">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar size={16} className="text-mauve" />
                  <span className="text-gray-400 text-sm">May 2024 - Present</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Dialog Finance Plc</h3>
                <p className="text-mauve">Colombo</p>
                <div className="mt-4 inline-flex bg-mauve/10 border border-mauve/20 rounded-full px-3 py-1">
                  <span className="text-sm font-medium">Intern - Fintech Platforms</span>
                </div>
              </div>
            </div>

            <div className="md:w-2/3 border-l-2 border-mauve/20 pl-6">
              <h4 className="text-lg font-medium mb-4">Responsibilities:</h4>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <span className="text-mauve mt-1">•</span>
                  <span className="text-gray-300">Developed and enhanced fintech platforms contributing to innovative financial technology products</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mauve mt-1">•</span>
                  <span className="text-gray-300">Collaborated with cross-functional teams to design, test, and deploy digital financial products</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mauve mt-1">•</span>
                  <span className="text-gray-300">Participated in project management ensuring timely delivery and adherence to best practices</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mauve mt-1">•</span>
                  <span className="text-gray-300">Conducted market research and analysis to enhance fintech offerings based on customer needs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mauve mt-1">•</span>
                  <span className="text-gray-300">Supported maintenance and optimization of existing platforms, improving user experience and operational efficiency</span>
                </li>
              </ul>

              {/* <div className="mt-6">
                <h4 className="text-lg font-medium mb-3">Tech Stack Used:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-dark border border-mauve/20 rounded-full px-3 py-1 text-sm">React.js</span>
                  <span className="bg-dark border border-mauve/20 rounded-full px-3 py-1 text-sm">Node.js</span>
                  <span className="bg-dark border border-mauve/20 rounded-full px-3 py-1 text-sm">Java</span>
                  <span className="bg-dark border border-mauve/20 rounded-full px-3 py-1 text-sm">MongoDB</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
