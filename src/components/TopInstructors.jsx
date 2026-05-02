"use client";

const instructors = [
  {
    id: 1,
    name: "David Vance",
    role: "LEAD DATA SCIENTIST",
    description:
      "Former Head of Analytics at Silicon Valley giants with 15+ years experience.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Amara Okafor",
    role: "SENIOR PRODUCT DESIGNER",
    description:
      "Award-winning designer specializing in accessible user interfaces and design systems.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Julian Rossi",
    role: "WEB DEVELOPMENT EXPERT",
    description:
      "Full-stack architect with a passion for teaching modern JavaScript frameworks and clean code.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Elena Soros",
    role: "MARKETING STRATEGIST",
    description:
      "Global marketing lead specializing in digital growth and brand positioning for startups.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function TopInstructors() {
  return (
    <section className="bg-[#f8fafc] py-16">
      <div className="px-5 lg:px-10">
        
        {/* Heading */}
        <div className="flex items-center gap-4">
          <div className="h-10 w-1 rounded-full bg-teal-700"></div>

          <h2 className="text-4xl font-bold text-teal-900 sm:text-5xl">
            Top Instructors
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4">
          
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="group"
            >
              
              {/* Image */}
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="h-[320px] w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>

              {/* Content */}
              <div className="mt-5">
                
                {/* Name */}
                <h3 className="text-2xl font-bold text-gray-800">
                  {instructor.name}
                </h3>

                {/* Role */}
                <p className="mt-2 text-sm font-bold tracking-wider text-purple-500">
                  {instructor.role}
                </p>

                {/* Description */}
                <p className="mt-4 text-base leading-7 text-gray-500">
                  {instructor.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}