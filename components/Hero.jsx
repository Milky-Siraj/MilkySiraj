import { Github, Linkedin, Mail, Phone, Download, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gray-900 min-h-screen flex items-center relative overflow-hidden py-20">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 border border-orange-500/20 rounded-full"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-orange-500/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-16 bg-orange-500/30 transform rotate-45"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <p className="text-orange-500 font-semibold text-lg mb-2">
                Hello, I'm
              </p>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 leading-tight">
                Milky
                <br />
                <span className="text-orange-500">Siraj</span>
              </h1>
              <p className="text-2xl text-gray-300 font-light mb-6">
                Software Engineer
              </p>
            </div>

            <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
              Specialized in full-stack development with Next.js, React, and
              modern web technologies. Passionate about creating innovative
              solutions and delivering clean, maintainable code.
            </p>

            {/* Stats */}
            <div className="flex gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-orange-500">2+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500">5+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">
                  Projects Completed
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500">3.51</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">
                  CGPA
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="mailto:milkysiraj124@gmail.com"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2"
              >
                <Mail size={20} />
                Get In Touch
              </a>
              <a
                href="#"
                className="border-2 border-orange-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-500 hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-orange-500" />
                <span>+251 948 150 517</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-orange-500" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Profile Image Container */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur opacity-20"></div>
              <img
                src="/placeholder.svg?height=500&width=400&text=Milky+Siraj"
                alt="Milky Siraj"
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>

            {/* Floating Info Cards */}
            <div className="absolute -left-8 top-16 bg-gray-800/90 backdrop-blur-sm border border-orange-500/20 rounded-lg p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white text-sm font-medium">
                  Available for work
                </span>
              </div>
            </div>

            <div className="absolute -right-8 bottom-16 bg-gray-800/90 backdrop-blur-sm border border-orange-500/20 rounded-lg p-4 shadow-xl">
              <div className="text-center">
                <div className="text-orange-500 font-bold text-lg">
                  President's Award
                </div>
                <div className="text-gray-300 text-sm">Academic Excellence</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
              <a
                href="https://github.com/Milky-Siraj"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors shadow-lg"
              >
                <Github size={20} className="text-white" />
              </a>
              <a
                href="https://linkedin.com/in/milky-siraj-763752285"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors shadow-lg"
              >
                <Linkedin size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Services/Skills Strip */}
        <div className="mt-20 pt-8 border-t border-gray-700">
          <div className="flex flex-wrap justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span>Full-Stack Development</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span>API Development</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span>Database Design</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span>UI/UX Implementation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
