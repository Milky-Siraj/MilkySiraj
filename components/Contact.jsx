import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "milkysiraj124@gmail.com",
      href: "mailto:milkysiraj124@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+251 948 150 517",
      href: "tel:+251948150517",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/milky-siraj-763752285",
      href: "https://linkedin.com/in/milky-siraj-763752285",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Milky-Siraj",
      href: "https://github.com/Milky-Siraj",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Addis Ababa, Ethiopia",
      href: null,
    },
  ];

  return (
    <section id="contact" className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Let's Connect
            </h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                const content = (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-xl p-6 shadow-lg border border-white/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        {contact.label}
                      </h4>
                      <p className="text-gray-400 text-sm break-all">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                );

                return contact.href ? (
                  <a
                    key={index}
                    href={contact.href}
                    target={
                      contact.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      contact.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  content
                );
              })}
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-gray-700 rounded-2xl p-8 shadow-xl border border-white/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center">
            <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Thank You!
            </h3>
            <p className="text-gray-300 mb-8">
              I'm currently available for new opportunities and exciting
              projects. Let's create something amazing together!
            </p>
            <div className="space-y-4">
              <a
                href="mailto:milkysiraj124@gmail.com"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2 w-full justify-center"
              >
                <Mail size={20} />
                Send me an email
              </a>
              <div className="flex gap-4 justify-center">
                <a
                  href="https://github.com/Milky-Siraj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-orange-500/20 rounded-lg hover:bg-orange-500/30 transition-colors border border-orange-500/30"
                >
                  <Github size={20} className="text-orange-500" />
                </a>
                <a
                  href="https://linkedin.com/in/milky-siraj-763752285"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-orange-500/20 rounded-lg hover:bg-orange-500/30 transition-colors border border-orange-500/30"
                >
                  <Linkedin size={20} className="text-orange-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
