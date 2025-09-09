export const metadata = {
  title: "Experience | Harin",
};

// Real project experience from Harin's resume
const experiences = [
  {
    title: "Online Phone Sale Web System",
    company: "Academic Project",
    location: "Remote",
    period: "Jul - Oct 2023",
    type: "Project",
    description: "Developed a comprehensive web-based platform for buying and selling mobile phones with user-friendly interface for customers to browse, compare, and purchase smartphones online.",
    achievements: [
      "Built dynamic content management system with secure transactions",
      "Implemented user authentication and session management",
      "Created responsive design for mobile and desktop compatibility",
      "Developed efficient database structure for product management"
    ],
    technologies: ["HTML", "PHP", "JSP", "MySQL", "CSS", "JavaScript"],
    current: false
  },
  {
    title: "Car Rental Web System",
    company: "Academic Project",
    location: "Remote",
    period: "Apr 2023",
    type: "Project",
    description: "Built a comprehensive web-based application for efficient car rental management featuring vehicle information, booking process, and customer management with administrative functions.",
    achievements: [
      "Developed complete booking and reservation system",
      "Implemented vehicle availability tracking and management",
      "Created customer management dashboard with booking history",
      "Built administrative panel for fleet and booking management"
    ],
    technologies: ["C#", "ASP.NET", "SQL Server", "HTML", "CSS", "JavaScript"],
    current: false
  },
  {
    title: "Online Movie Seat Booking System",
    company: "Academic Project",
    location: "Remote",
    period: "2023-2024",
    type: "Project",
    description: "Developed a web-based platform using Java technologies and Spring Boot to enable users to browse movies, select showtimes, and book seats online with seamless user experience.",
    achievements: [
      "Built real-time seat availability and booking system",
      "Implemented movie scheduling and showtime management",
      "Created user-friendly seat selection interface",
      "Developed admin panel for theater and movie management"
    ],
    technologies: ["Java", "JSP", "Servlets", "Spring Boot", "MySQL", "HTML", "CSS"],
    current: false
  },
  {
    title: "Tea Center Management System",
    company: "Personal Project",
    location: "Remote",
    period: "2024",
    type: "Project",
    description: "Developed a desktop application using Electron, Node.js, and PostgreSQL to manage tea collection, supplier payments, and monthly rate calculations with comprehensive business management features.",
    achievements: [
      "Built secure login system with role-based access control",
      "Implemented PostgreSQL-backed data management for reliability",
      "Added CSV batch uploads for efficient data processing",
      "Created reporting and printing support to improve operational efficiency"
    ],
    technologies: ["Electron", "Node.js", "PostgreSQL", "JavaScript", "CSS"],
    current: false
  },
  {
    title: "Portfolio Website Development",
    company: "Personal Project",
    location: "Remote",
    period: "2024 - Present",
    type: "Project",
    description: "Designed and developed a modern, responsive portfolio website with dark mode, beautiful animations, and optimized performance using Next.js and Tailwind CSS.",
    achievements: [
      "Implemented beautiful animated backgrounds and smooth transitions",
      "Created fully functional dark mode theme system with persistence",
      "Built responsive design that works across all devices",
      "Optimized performance with Next.js 15 and modern web standards"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "CSS Animations"],
    current: true
  }
];

export default function ExperiencePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-emerald-100/20 to-teal-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-32 h-32 bg-gradient-to-tr from-blue-100/20 to-indigo-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-bl from-purple-100/20 to-pink-100/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 fade-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Experience</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A journey through my professional career, showcasing growth, achievements, and the impact I've made
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-teal-500 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <article 
                key={exp.title + exp.company}
                className="relative fade-up"
                style={{ animationDelay: `${200 + index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full border-4 border-white dark:border-gray-900 hidden md:block"></div>
                
                {/* Experience Card */}
                <div className="md:ml-20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 dark:text-gray-300">
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400">{exp.company}</span>
                        <span className="hidden sm:block">•</span>
                        <span>{exp.location}</span>
                        <span className="hidden sm:block">•</span>
                        <span className="text-sm">{exp.type}</span>
                      </div>
                    </div>
                    <div className="mt-3 sm:mt-0">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                        📅 {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <span className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mr-2 flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </span>
                      Key Achievements
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                          <span className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 dark:from-emerald-900/30 dark:to-teal-900/30 dark:text-emerald-300 border border-emerald-200/50 dark:border-emerald-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 fade-up delay-800">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Project Highlights</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">6</div>
                <div className="text-emerald-100 text-sm">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">12+</div>
                <div className="text-emerald-100 text-sm">Technologies Used</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-emerald-100 text-sm">Project Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">2024</div>
                <div className="text-emerald-100 text-sm">Latest Project</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center fade-up delay-1000">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to Work Together?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting challenges. 
              Let's discuss how my experience can benefit your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all"
              >
                Get In Touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a 
                href="/resume" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              >
                View Resume
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


