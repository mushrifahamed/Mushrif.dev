
import { CurvedLine, CircleBackground } from './DecorativeElements';
import { Award, Users } from 'lucide-react';

interface Activity {
  id: number;
  title: string;
  organization?: string;
  period?: string;
}

const activities: Activity[] = [
  {
    id: 1,
    title: "Media Coordinator",
    organization: "SLIIT Kandy Center"
  },
  {
    id: 2,
    title: "Committee member of Islamic Majlis (25/26)",
    organization: "SLIIT"
  },
  {
    id: 3,
    title: "Member of SLIIT Media Unit",
    organization: "SLIIT"
  },
  {
    id: 4,
    title: "Senior Prefect (2020-2021)",
    organization: "St. Anthony's College"
  },
  {
    id: 5,
    title: "Secretary of Media Unit (2019-2020)",
    organization: "St. Anthony's College"
  },
  {
    id: 6,
    title: "Coordinator of the English Literary Circle and Computer Club (2019-2020)",
    organization: "St. Anthony's College"
  },
  {
    id: 7,
    title: "Organizer of Islamic Majilis (2020)",
    organization: "St. Anthony's College"
  },
  {
    id: 8,
    title: "Hockey Team Player - Under 14, 16, 18, and 1st XI Hockey Team (2014-2021)",
    organization: "St. Anthony's College"
  }
];

const ActivityItem = ({ activity }: { activity: Activity }) => (
  <div className="flex gap-4 border-l-2 border-mauve/30 pl-4 pb-6 relative">
    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-mauve"></div>
    <div>
      <h3 className="font-medium text-white">{activity.title}</h3>
      {activity.organization && (
        <p className="text-gray-400 text-sm">{activity.organization}</p>
      )}
      {activity.period && (
        <p className="text-gray-500 text-xs">{activity.period}</p>
      )}
    </div>
  </div>
);

const Activities = () => {
  return (
    <section id="activities" className="py-20 relative overflow-hidden">
      <CircleBackground className="w-[400px] h-[400px] -right-64 top-32 opacity-10" />
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Activities & <span className="text-gradient">Leadership</span>
          </h2>
          <CurvedLine className="w-40 h-5" />
        </div>

        <div className="bg-dark-lighter border border-muted rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Users className="text-mauve" size={24} />
            <h3 className="text-xl font-semibold">Leadership Roles & Extracurricular Activities</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
            {activities.map((activity) => (
              <ActivityItem key={activity.id} activity={activity} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
