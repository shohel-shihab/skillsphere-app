"use client";

import {
  FaRegClock,
  FaLink,
  FaBookOpen,
} from "react-icons/fa";

const tips = [
  {
    id: 1,
    title: "Pomodoro Power",
    description:
      "Boost focus by working in 25-minute sprints followed by a 5-minute break. This keeps your brain fresh and prevents learning fatigue.",
    icon: <FaRegClock />,
    color: "border-purple-500",
    iconColor: "text-purple-500",
  },
  {
    id: 2,
    title: "Visual Mapping",
    description:
      "Transform abstract concepts into mind maps. Visualizing the connections between ideas improves long-term recall by up to 40%.",
    icon: <FaLink />,
    color: "border-teal-700",
    iconColor: "text-teal-700",
  },
  {
    id: 3,
    title: "Active Recall",
    description:
      "Don't just re-read. Test yourself on the material without looking at your notes. It forces the brain to retrieve information effectively.",
    icon: <FaBookOpen />,
    color: "border-orange-700",
    iconColor: "text-orange-700",
  },
];

export default function LearningTips() {
  return (
    <section className="bg-[#f8fafc] py-16">
      <div className="px-5 lg:px-10">
        
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-teal-900 sm:text-5xl">
            Learning Tips
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-500">
            Enhance your cognitive retention and study more
            effectively with these research-backed techniques.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          
          {tips.map((tip) => (
            <div
              key={tip.id}
              className={`rounded-3xl border-l-4 ${tip.color} bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl`}
            >
              
              {/* Icon */}
              <div
                className={`text-3xl ${tip.iconColor}`}
              >
                {tip.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-2xl font-bold text-gray-800">
                {tip.title}
              </h3>

              {/* Description */}
              <p className="mt-5 text-lg leading-8 text-gray-500">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}