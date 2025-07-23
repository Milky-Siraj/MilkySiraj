import { ExternalLink, Github, Smartphone, Globe } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Parental Tracking App for Autistic Children",
      subtitle: "Final Year Project",
      description:
        "Designed system architecture and robust backend APIs with JWT authentication. Built an intuitive admin dashboard and integrated OpenAI/Gemini APIs for assistance features.",
      technologies: [
        "Django REST",
        "Flutter",
        "Next.js",
        "PostgreSQL",
        "OpenAI API",
        "JWT",
      ],
      achievements: [
        "Enabled structured health tracking for parents, reducing manual tracking burden by 60%",
        "Integrated AI assistance features for better user experience",
        "Built comprehensive admin dashboard for system management",
      ],
      type: "Mobile App",
      icon: Smartphone,
    },
    // {
    //   title: "Event Management Platform",
    //   subtitle: "Professional Project",
    //   description:
    //     "Designed the database schema, built RESTful API endpoints, and developed responsive user interfaces for a comprehensive event management solution.",
    //   technologies: [
    //     "React (Next.js)",
    //     "Node.js",
    //     "MongoDB",
    //     "NextAuth",
    //     "Cloudinary",
    //     "TailwindCSS",
    //   ],
    //   achievements: [
    //     "Enabled efficient service listing for providers with rates, images, and categories",
    //     "Implemented dynamic filtering for enhanced user experience",
    //     "Built scalable Next.js applications handling multiple concurrent users",
    //     "Followed GitHub best practices for clean commits and version control",
    //   ],
    //   type: "Web Application",
    //   icon: Globe,
    //   hasLiveDemo: true,
    // },
  ];

  return (
    <section id="projects" className="bg-[#16213e] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-[#ff6b35] mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing my technical expertise through impactful projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className="bg-[#0f3460] rounded-2xl p-8 shadow-xl border border-white/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#ff6b35] rounded-lg flex items-center justify-center">
                      <IconComponent size={20} className="text-white" />
                    </div>
                    <div>
                      <span className="bg-[#ff6b35]/20 text-[#ff6b35] px-3 py-1 rounded-full text-sm font-medium border border-[#ff6b35]/30">
                        {project.type}
                      </span>
                    </div>
                  </div>
                  {project.hasLiveDemo && (
                    <div className="flex gap-2">
                      <button className="p-2 bg-[#ff6b35]/20 rounded-lg hover:bg-[#ff6b35]/30 transition-colors">
                        <ExternalLink size={16} className="text-[#ff6b35]" />
                      </button>
                      <button className="p-2 bg-[#ff6b35]/20 rounded-lg hover:bg-[#ff6b35]/30 transition-colors">
                        <Github size={16} className="text-[#ff6b35]" />
                      </button>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-[#ff6b35] font-medium mb-4">
                  {project.subtitle}
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-3">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="flex items-start gap-3 text-gray-300 text-sm"
                      >
                        <span className="w-2 h-2 bg-[#ff6b35] rounded-full mt-2 flex-shrink-0"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
