import { Github, Linkedin, Mail, Phone, Eye, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gray-900 min-h-screen flex items-center relative overflow-hidden py-20">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 border border-orange-500/20 rounded-full"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-orange-500/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-16 bg-orange-500/30 transform rotate-45"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="text-center">
          {/* Main Content */}
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

          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Specialized in full-stack development with Next.js, React, and
            modern web technologies. Passionate about creating innovative
            solutions and delivering clean, maintainable code.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mb-8">
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
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="mailto:milkysiraj124@gmail.com"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2"
            >
              <Mail size={20} />
              Get In Touch
            </a>
            <a
              href="/milkySiraj.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-orange-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-500 hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2"
            >
              <Eye size={20} />
              View CV
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex justify-center gap-8 mb-8 text-gray-400">
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-orange-500" />
              <span>+251 948 150 517</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-orange-500" />
              <span>Addis Ababa, Ethiopia</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12">
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
              <span>UI/UX Implementation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
