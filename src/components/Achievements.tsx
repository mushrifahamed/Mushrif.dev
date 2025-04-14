
import { Trophy } from 'lucide-react';
import { CurvedLine, CircleBackground, StarIcon } from './DecorativeElements';

interface Achievement {
  id: number;
  title: string;
  event: string;
  description: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "1st Runners up",
    event: "Algothan - SLIIT Codefest 2024",
    description: "6-hour Algorithmic programming challenge focusing on problem-solving and coding efficiency"
  },
  {
    id: 2,
    title: "4th Place",
    event: "Netcom - SLIIT Codefest 2024",
    description: "Networking Challenge"
  },
  {
    id: 3,
    title: "4th Place",
    event: "SLIIT Extreme 3.0",
    description: "9-hour coding challenge focusing on problem-solving and coding efficiency"
  },
  {
    id: 4,
    title: "2nd Runners up",
    event: "INTELLECT 1.0",
    description: "Presented an innovative idea on generating energy-efficient solutions for households"
  }
];

const AchievementCard = ({ achievement }: { achievement: Achievement }) => (
  <div className="bg-dark-lighter border border-muted rounded-xl p-6 hover-lift relative overflow-hidden">
    <div className="absolute top-0 right-0 p-3">
      <Trophy className="text-yellow-500" size={24} />
    </div>
    
    <h3 className="text-xl font-semibold mb-1 text-mauve">{achievement.title}</h3>
    <p className="font-medium mb-3">{achievement.event}</p>
    <p className="text-gray-400 text-sm">{achievement.description}</p>
  </div>
);

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <CircleBackground className="w-[400px] h-[400px] -left-64 center opacity-10" />
      <StarIcon className="top-20 right-[15%]" size={18} animationDelay="0.7s" />
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-gradient">Awards</span> & Achievements
          </h2>
          <CurvedLine className="w-40 h-5" />
          <p className="text-gray-300 max-w-2xl mt-4">
            Recognition and accomplishments that highlight my technical expertise and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
