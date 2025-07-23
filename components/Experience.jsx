import { Calendar, MapPin, ExternalLink, Briefcase } from "lucide-react";
import Link from "next/link";

export default function Experience() {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Happy Events – Event Management Platform",
      location: "Remote",
      period: "December 2024 - Present",
      technologies: [
        "React (Next.js)",
        "Next.js API Routes",
        "MongoDB",
        "Cloudinary",
        "Tailwind CSS",
      ],
      achievements: [
        "Developed a full-stack event management and service marketplace platform allowing users to browse, book, and manage event services, and providers to list their offerings.",
        "Designed the database schema, built RESTful API endpoints, and developed responsive user interfaces.",
        "Enabled efficient service listing for providers, including rates, images, and categories, and implemented dynamic filtering and responsive layouts for enhanced user experience.",
      ],
      liveDemo: "https://events-project-livid.vercel.app",
    },
    {
      title: "Intern – Full-Stack Developer",
      company: "Onyx Technologies",
      location: "Remote",
      period: "July 2024 - Oct 2024",
      technologies: ["React", "Next.js", "TailwindCSS", "Node.js", "MongoDB"],
      achievements: [
        "Developed a comprehensive progress management web application enabling users to create and manage projects/tasks, assign tasks, track completion streaks, and manage bug reports.",
        "Led both frontend and backend development, utilizing React, Next.js, TailwindCSS for the frontend, and Next.js API Routes (Node.js) with MongoDB for the backend.",
        "Implemented NextAuth.js for robust authentication and a custom polling-based notification system, enhancing user engagement and accountability.",
        "Successfully deployed the application on Vercel, improving task tracking efficiency and accountability within team collaborations.",
      ],
      liveDemo: "https://progress-web-app-sand.vercel.app",
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

                      <Link
                        href={exp.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} className="text-gray-400" />
                      </Link>
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
                    {exp.liveDemo && (
                      <div className="mt-4">
                        <a
                          href={exp.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-4 py-2 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2 text-sm"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      </div>
                    )}
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
