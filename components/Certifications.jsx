"use client";

import { useState } from "react";
import { GraduationCap, Award, FileText, Download, Eye, X } from "lucide-react";

export default function Certifications() {
  const [selectedDocument, setSelectedDocument] = useState(null);

  const documents = [
    {
      id: 1,
      title: "Bachelor's Degree Certificate",
      subtitle: "Software Engineering",
      institution: "Addis Ababa Science and Technology University",
      date: "June 2025",
      type: "degree",
      description: "Bachelor of Science in Software Engineering with CGPA 3.51",
      imageUrl: "/degree.jpg",
      downloadUrl: "#",
    },
    {
      id: 2,
      title: "President's Award Certificate",
      subtitle: "Academic Excellence",
      institution: "Addis Ababa Science and Technology University",
      date: "2023/24 Academic Year",
      type: "award",
      description:
        "Awarded for achieving Semester GPA of 3.83 in the first semester",
      imageUrl: "/award.jpg",
      downloadUrl: "#",
    },
    {
      id: 3,
      title: "Fellowship Certificate",
      subtitle: "Evangelical Students' Union",
      institution: "EvaSUE - AASTU Chapter",
      date: "2021/2022 - 2025",
      type: "certificate",
      description:
        "Active member of Evangelical Students' and Graduates Union of Ethiopia",
      imageUrl: "/evasue.jpg",
      downloadUrl: "#",
    },
  ];

  const getIcon = (type) => {
    switch (type) {
      case "degree":
        return GraduationCap;
      case "award":
        return Award;
      default:
        return FileText;
    }
  };

  return (
    <section id="certifications" className="bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Certifications & Education
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Academic achievements and certifications that validate my expertise
            and commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documents.map((doc) => {
            const IconComponent = getIcon(doc.type);
            return (
              <div
                key={doc.id}
                className="bg-gray-700 rounded-2xl shadow-xl border border-white/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 bg-gray-600 overflow-hidden">
                  <img
                    src={doc.imageUrl || "/placeholder.svg"}
                    alt={doc.title}
                    className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => setSelectedDocument(doc)}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedDocument(doc)}
                      className="bg-orange-500 p-3 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"
                    >
                      <Eye size={20} className="text-white" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                      <IconComponent size={18} className="text-white" />
                    </div>
                    <div>
                      <span className="bg-orange-500/20 text-orange-500 px-2 py-1 rounded text-xs font-medium border border-orange-500/30">
                        {doc.type.charAt(0).toUpperCase() + doc.type.slice(1)}
                      </span>
                      <p className="text-gray-400 text-sm mt-1">{doc.date}</p>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2">
                    {doc.title}
                  </h3>
                  <p className="text-orange-500 font-medium mb-2">
                    {doc.subtitle}
                  </p>
                  <p className="text-gray-400 text-sm mb-3">
                    {doc.institution}
                  </p>
                  <p className="text-gray-300 text-sm mb-6">
                    {doc.description}
                  </p>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedDocument(doc)}
                      className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-4 py-2 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 text-sm flex-1 justify-center"
                    >
                      <Eye size={16} />
                      View
                    </button>
                    <a
                      href={doc.downloadUrl}
                      className="border-2 border-orange-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-orange-500 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 text-sm flex-1 justify-center"
                      download
                    >
                      <Download size={16} />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {selectedDocument && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 rounded-lg max-w-4xl max-h-[90vh] overflow-hidden border border-orange-500/20">
              <div className="flex items-center justify-between p-6 border-b border-gray-700">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {selectedDocument.title}
                  </h3>
                  <p className="text-gray-400">
                    {selectedDocument.institution}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={selectedDocument.downloadUrl}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-4 py-2 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 text-sm"
                    download
                  >
                    <Download size={16} />
                    Download
                  </a>
                  <button
                    onClick={() => setSelectedDocument(null)}
                    className="p-2 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                  >
                    <X size={20} className="text-gray-400" />
                  </button>
                </div>
              </div>
              <div className="p-6 max-h-[70vh] overflow-auto">
                <img
                  src={selectedDocument.imageUrl || "/placeholder.svg"}
                  alt={selectedDocument.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
