export const metadata = {
  title: "Resume | Harin",
};

export default function ResumePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-orange-100/20 to-red-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-32 h-32 bg-gradient-to-tr from-yellow-100/20 to-orange-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-bl from-pink-100/20 to-rose-100/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 fade-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Resume</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my professional journey, skills, and achievements
          </p>
        </div>

        {/* Resume Preview Card */}
        <div className="max-w-4xl mx-auto mb-16 fade-up delay-200">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300">
            {/* Resume Header */}
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Professional Resume</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Complete details of my professional experience, education, and technical skills
              </p>
            </div>

            {/* Resume Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">BSc</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Software Engineering</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl">
                <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-1">6</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Major Projects</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-xl">
                <div className="text-2xl font-bold text-pink-600 dark:text-pink-400 mb-1">12+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Technologies</div>
              </div>
            </div>

            {/* Download Section */}
            <div className="text-center">
              <a
                href="/harin-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume (PDF)
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                📄 Complete professional resume with detailed experience and skills
              </p>
            </div>
          </div>
        </div>

        {/* Resume Sections Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: "Professional Experience",
              description: "Detailed work history with achievements and responsibilities",
              icon: "💼",
              color: "from-blue-500 to-indigo-500"
            },
            {
              title: "Technical Skills",
              description: "Programming languages, frameworks, and tools expertise",
              icon: "⚡",
              color: "from-purple-500 to-pink-500"
            },
            {
              title: "Education & Certifications",
              description: "Academic background and professional certifications",
              icon: "🎓",
              color: "from-emerald-500 to-teal-500"
            },
            {
              title: "Projects Portfolio",
              description: "Key projects with technologies and outcomes",
              icon: "🚀",
              color: "from-orange-500 to-red-500"
            },
            {
              title: "Achievements & Awards",
              description: "Recognition and accomplishments throughout career",
              icon: "🏆",
              color: "from-yellow-500 to-orange-500"
            },
            {
              title: "Contact Information",
              description: "Professional contact details and social profiles",
              icon: "📧",
              color: "from-cyan-500 to-blue-500"
            }
          ].map((section, index) => (
            <div 
              key={section.title}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 fade-up"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-lg mb-4 flex items-center justify-center text-2xl`}>
                {section.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {section.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {section.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="text-center fade-up delay-800">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Connect?</h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Interested in my background? Let's discuss how my skills and experience can contribute to your team's success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Me
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a 
                href="/experience" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-700 text-white rounded-lg font-semibold hover:bg-orange-800 transition-colors"
              >
                View Experience
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
