import { Calendar, MapPin, ExternalLink, Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Backend Developer",
      company: "Happy Events – Event Management Platform",
      location: "Remote",
      period: "December 2024 - Present",
      technologies: ["Django REST", "Flutter", "Next.js", "PostgreSQL"],
      achievements: [
        "Designed system architecture and robust backend APIs with JWT authentication",
        "Built an intuitive admin dashboard and integrated OpenAI/Gemini APIs for assistance features",
        "Enabled structured health tracking for parents, reducing manual tracking burden by 60%",
      ],
    },
    {
      title: "Intern – Full-Stack Developer",
      company: "Onyx Technologies",
      location: "Remote",
      period: "July 2024 - Oct 2024",
      technologies: ["React", "Next.js", "TailwindCSS", "Node.js", "MongoDB"],
      achievements: [
        "Built RESTful APIs and responsive user interfaces using Next.js and TailwindCSS",
        "Improved dynamic filtering for service listings, enabling enhanced user experience",
        "Practiced clean Git workflows and collaborative code reviews within an agile team",
      ],
      liveDemo: true,
    },
  ];

  return (
    <section id="experience" className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Working Experience
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey in software development and the impact I've
            made
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-2xl p-8 shadow-xl border border-white/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-orange-500 font-medium mb-2">
                      <span>{exp.company}</span>
                      {exp.liveDemo && (
                        <ExternalLink size={16} className="text-gray-400" />
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-orange-500/20 text-orange-500 px-3 py-1 rounded-full text-sm font-medium border border-orange-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, achIndex) => (
                  <li
                    key={achIndex}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
