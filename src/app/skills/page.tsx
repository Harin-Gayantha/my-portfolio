export const metadata = {
  title: "Skills | Harin",
};

const skillCategories = [
  { 
    title: "Frontend Development", 
    icon: "🎨",
    gradient: "from-blue-500 to-purple-600",
    skills: [
      { name: "React", level: 90, color: "from-blue-400 to-blue-600" },
      { name: "JavaScript", level: 95, color: "from-yellow-400 to-orange-500" },
      { name: "TypeScript", level: 85, color: "from-blue-500 to-blue-700" },
      { name: "HTML/CSS", level: 95, color: "from-orange-400 to-red-500" },
      { name: "Next.js", level: 80, color: "from-gray-700 to-gray-900" },
      { name: "Bootstrap", level: 85, color: "from-purple-500 to-purple-700" }
    ]
  },
  { 
    title: "Backend Development", 
    icon: "⚙️",
    gradient: "from-emerald-500 to-cyan-600",
    skills: [
      { name: "Node.js", level: 85, color: "from-green-500 to-green-700" },
      { name: "Java", level: 80, color: "from-red-500 to-orange-600" },
      { name: "Spring Boot", level: 75, color: "from-green-600 to-green-800" },
      { name: "PHP", level: 70, color: "from-indigo-500 to-purple-600" },
      { name: "C#", level: 75, color: "from-purple-600 to-blue-700" }
    ]
  },
  { 
    title: "Database & Tools", 
    icon: "🗄️",
    gradient: "from-pink-500 to-rose-600",
    skills: [
      { name: "PostgreSQL", level: 80, color: "from-blue-600 to-indigo-700" },
      { name: "MySQL", level: 85, color: "from-orange-500 to-yellow-600" },
      { name: "Git/GitHub", level: 90, color: "from-gray-700 to-gray-900" },
      { name: "Figma", level: 75, color: "from-pink-500 to-purple-600" }
    ]
  },
  { 
    title: "Programming Languages", 
    icon: "💻",
    gradient: "from-yellow-500 to-orange-600",
    skills: [
      { name: "Python", level: 80, color: "from-blue-500 to-green-500" },
      { name: "C/C++", level: 75, color: "from-blue-600 to-blue-800" },
      { name: "Java", level: 80, color: "from-red-500 to-orange-600" }
    ]
  }
];

export default function SkillsPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-32 h-32 bg-gradient-to-tr from-emerald-100/20 to-cyan-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-bl from-pink-100/20 to-rose-100/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 fade-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Skills</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 fade-up"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center mr-4 shadow-lg`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name} 
                    className="skill-item"
                    style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`bg-gradient-to-r ${skill.color} h-3 rounded-full skill-progress shadow-sm`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 fade-up delay-1000">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg mr-3 flex items-center justify-center">
              <span className="text-white text-sm">🚀</span>
            </div>
            Additional Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Responsive Design", icon: "📱" },
              { name: "API Development", icon: "🔌" },
              { name: "Version Control", icon: "🔄" },
              { name: "Problem Solving", icon: "🧩" },
              { name: "Team Collaboration", icon: "👥" },
              { name: "Agile Methodology", icon: "⚡" },
              { name: "Code Review", icon: "🔍" },
              { name: "Testing", icon: "🧪" }
            ].map((item, index) => (
              <div 
                key={item.name}
                className="flex items-center p-4 rounded-xl bg-gray-50/50 dark:bg-gray-700/50 hover:bg-gray-100/50 dark:hover:bg-gray-600/50 transition-colors soft-skill-item"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-2xl mr-3">{item.icon}</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


