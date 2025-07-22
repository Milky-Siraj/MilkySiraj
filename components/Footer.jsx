export default function Footer() {
  return (
    <footer className="bg-dark-secondary text-white py-12 border-t border-accent-orange border-opacity-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-accent-orange mb-4">
            Milky Siraj
          </h3>
          <p className="text-gray-300 mb-6 text-lg">Software Engineer</p>
          <div className="w-16 h-1 bg-accent-orange mx-auto mb-6"></div>
          <p className="text-gray-400 text-sm mb-2">
            © {new Date().getFullYear()} Milky Siraj. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Built with Next.js and TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
}
