import Image from "next/image";

export const metadata = {
  title: "About | Harin",
};

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-tr from-emerald-100/20 to-cyan-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 fade-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Me</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate Software Engineer crafting digital experiences with modern technologies
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 fade-up delay-200">
              <div className="text-center mb-6">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image 
                    src="/harin.jpg" 
                    alt="Harin Wijethunga" 
                    fill 
                    className="object-cover rounded-full border-4 border-white shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20"></div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Harin Wijethunga</h2>
                <p className="text-blue-600 dark:text-blue-400 font-medium">Software Engineer</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm">BSc Software Engineering</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <div className="w-5 h-5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm">NSBM Green University</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <div className="w-5 h-5 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm">2023 - 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 fade-up delay-400">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-3 flex items-center justify-center">
                  <span className="text-white text-sm">👨‍💻</span>
                </div>
                My Journey
              </h3>
              <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  I am a dedicated and passionate software engineer who thrives in collaborative environments. 
                  My journey in technology is driven by an insatiable curiosity to solve complex problems and 
                  create innovative solutions that make a meaningful impact.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Currently pursuing my BSc (Hons) in Software Engineering at NSBM Green University, 
                  affiliated with Plymouth University, UK. I consistently deliver high-quality results 
                  while embracing challenges as opportunities for growth and learning.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I believe in the power of continuous improvement, innovation, and teamwork. 
                  My approach combines technical expertise with strong problem-solving skills, 
                  attention to detail, and a passion for creating exceptional user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills & Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Technical Skills */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 fade-up delay-600">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg mr-3 flex items-center justify-center">
                <span className="text-white text-sm">⚡</span>
              </div>
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "JavaScript", level: 90 },
                { name: "React", level: 85 },
                { name: "Node.js", level: 80 },
                { name: "Python", level: 75 },
                { name: "TypeScript", level: 85 },
                { name: "Next.js", level: 80 }
              ].map((skill, index) => (
                <div key={skill.name} className="skill-item" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-2 rounded-full skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 fade-up delay-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg mr-3 flex items-center justify-center">
                <span className="text-white text-sm">🎯</span>
              </div>
              Core Strengths
            </h3>
            <div className="space-y-4">
              {[
                { icon: "🤝", title: "Teamwork & Collaboration", desc: "Thriving in collaborative environments" },
                { icon: "🔍", title: "Problem Solving", desc: "Analytical thinking and debugging expertise" },
                { icon: "📈", title: "Continuous Learning", desc: "Adaptability and growth mindset" },
                { icon: "⚡", title: "Innovation", desc: "Creative solutions and modern approaches" }
              ].map((strength, index) => (
                <div key={strength.title} className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50/50 dark:bg-gray-700/50 hover:bg-gray-100/50 dark:hover:bg-gray-600/50 transition-colors soft-skill-item" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="text-2xl">{strength.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{strength.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{strength.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 fade-up delay-1000">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg mr-3 flex items-center justify-center">
              <span className="text-white text-sm">🎓</span>
            </div>
            Education Journey
          </h3>
          <div className="space-y-6">
            {[
              {
                year: "2023 - 2026",
                title: "BSc (Hons) Software Engineering",
                institution: "NSBM Green University",
                subtitle: "Plymouth University - United Kingdom",
                status: "Current"
              },
              {
                year: "2022",
                title: "GCE O/L",
                institution: "Dharmapala College Bandarawela",
                subtitle: "Completed with excellent results",
                status: "Completed"
              },
              {
                year: "2023",
                title: "Computing Foundation Programme",
                institution: "NSBM Green University",
                subtitle: "Preparatory program for degree studies",
                status: "Completed"
              }
            ].map((edu, index) => (
              <div key={edu.title} className="flex items-start space-x-6 education-item" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="flex-shrink-0">
                  <div className={`w-4 h-4 rounded-full ${edu.status === 'Current' ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gradient-to-r from-emerald-500 to-cyan-500'}`}></div>
                  <div className="w-0.5 h-16 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600 ml-1.5 mt-2"></div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                      {edu.year}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${edu.status === 'Current' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'}`}>
                      {edu.status}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.title}</h4>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">{edu.institution}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{edu.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


