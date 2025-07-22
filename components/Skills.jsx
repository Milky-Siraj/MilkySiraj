import { Database, Smartphone, Globe, GitBranch, Zap } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      skills: [
        "JavaScript (ES6+)",
        "React",
        "Next.js",
        "TailwindCSS",
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: "Backend",
      icon: Database,
      skills: [
        "Node.js",
        "Django REST",
        "Python",
        "PostgreSQL",
        "MongoDB",
        "JWT Auth",
      ],
    },
    {
      title: "Mobile",
      icon: Smartphone,
      skills: ["Flutter", "Dart", "React Native", "Mobile UI/UX"],
    },
    {
      title: "Tools & DevOps",
      icon: GitBranch,
      skills: ["Git", "GitHub", "Vercel", "Cloudinary", "Docker", "CI/CD"],
    },
  ];

  const coreCompetencies = [
    "Full-Stack Development",
    "RESTful API Design",
    "Database Design",
    "Responsive UI/UX",
    "Version Control",
    "Agile Development",
    "Problem Solving",
    "Team Collaboration",
  ];

  return (
    <section id="skills" className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-gray-700 rounded-2xl p-6 shadow-xl border border-white/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <IconComponent size={20} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-orange-500/10 text-orange-500 px-4 py-2 rounded-lg text-sm font-medium border border-orange-500/20"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-gray-700 rounded-2xl p-8 shadow-xl border border-white/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <Zap size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Core Competencies
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {coreCompetencies.map((competency, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium"
                >
                  {competency}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
