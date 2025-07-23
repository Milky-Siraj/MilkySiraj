import {
  GraduationCap,
  MapPin,
  Award,
  Code,
  Database,
  Smartphone,
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate software engineer with expertise in modern web
            technologies and a commitment to excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main About Content */}
          <div className="lg:col-span-2">
            <div className="bg-gray-700 rounded-2xl p-8 shadow-xl border border-white/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-6">
                My Journey
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a motivated Software Engineer with a strong foundation in
                full-stack development. My experience spans building scalable
                web applications using modern technologies like Next.js, React,
                Node.js, and various databases including MongoDB and PostgreSQL.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm recognized for my collaborative teamwork, problem-solving
                abilities, and commitment to delivering high-quality,
                user-centric applications. My practical deployment experience
                and clean coding practices make me a valuable addition to any
                development team.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Code size={24} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Frontend</h4>
                  <p className="text-gray-400 text-sm">
                    React, Next.js, TailwindCSS
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Database size={24} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Backend</h4>
                  <p className="text-gray-400 text-sm">
                    Node.js, Django, PostgreSQL
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Smartphone size={24} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Mobile</h4>
                  <p className="text-gray-400 text-sm">Flutter</p>
                </div>
              </div>
            </div>
          </div>

          {/* Side Info Cards */}
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-white/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <GraduationCap className="text-orange-500" size={24} />
                <h4 className="font-semibold text-white">Education</h4>
              </div>
              <p className="text-gray-300 text-sm">
                <strong>Bachelor of Science in Software Engineering</strong>
                <br />
                Addis Ababa Science and Technology University
                <br />
                CGPA: 3.51 | Graduated: June 2025
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-white/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="text-orange-500" size={24} />
                <h4 className="font-semibold text-white">Location</h4>
              </div>
              <p className="text-gray-300 text-sm">Addis Ababa, Ethiopia</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-white/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <Award className="text-orange-500" size={24} />
                <h4 className="font-semibold text-white">Achievement</h4>
              </div>
              <p className="text-gray-300 text-sm">
                President's Award for academic excellence
                <br />
                Semester GPA: 3.83 (2023/24)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
