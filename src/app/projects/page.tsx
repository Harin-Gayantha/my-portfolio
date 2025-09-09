import { loadProjectsFromMarkdown } from "@/lib/markdown";

export const metadata = {
  title: "Projects | Harin",
};

// Real projects from Harin's resume
const featuredProjects = [
  {
    title: "Online Phone Sale Web System",
    description: "A web-based platform designed for buying and selling mobile phones. Provides user-friendly interface for customers to browse, compare, and purchase smartphones online. Built with HTML, PHP, and JSP ensuring dynamic content management and secure transactions.",
    image: "/project1.jpg",
    tech: ["HTML", "PHP", "JSP", "MySQL", "CSS", "JavaScript"],
    github: "https://github.com/Harin-Gayantha",
    demo: "#",
    featured: true,
    category: "Full Stack",
    period: "Jul - Oct 2023"
  },
  {
    title: "Car Rental Web System",
    description: "A comprehensive web-based application developed using C# and ASP.NET for efficient car rental management. Features vehicle information, booking process, customer management, and administrative functions.",
    image: "/project2.jpg",
    tech: ["C#", "ASP.NET", "SQL Server", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Harin-Gayantha",
    demo: "#",
    featured: true,
    category: "Web Application",
    period: "Apr 2023"
  },
  {
    title: "Online Movie Seat Booking System",
    description: "A web-based platform developed using Java (JSP, Servlets) and Spring Boot to enable users to browse movies, select showtimes, and book seats online. Provides seamless experience for both customers and administrators.",
    image: "/project3.jpg",
    tech: ["Java", "JSP", "Servlets", "Spring Boot", "MySQL", "HTML", "CSS"],
    github: "https://github.com/Harin-Gayantha",
    demo: "#",
    featured: true,
    category: "Web Application",
    period: "2023-2024"
  },
  {
    title: "Tea Center Management System",
    description: "Desktop application developed using Electron, Node.js, and PostgreSQL to manage tea collection, supplier payments, and monthly rate calculations. Implemented secure login, role-based access, and PostgreSQL-backed data management with CSV batch uploads, reporting, and printing support to improve operational efficiency.",
    image: "/project4.jpg",
    tech: ["Electron", "Node.js", "PostgreSQL", "JavaScript", "CSS"],
    github: "https://github.com/Harin-Gayantha",
    demo: "#",
    featured: false,
    category: "Desktop Application",
    period: "2024"
  },
  {
    title: "POS System for Marketing",
    description: "A web-based Point of Sale (POS) system for a Marketing Business developed using C# and ASP.NET to streamline sales transactions, inventory management, and customer interactions. Includes secure login and financial reports.",
    image: "/project5.jpg",
    tech: ["C#", "ASP.NET", "SQL Server", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Harin-Gayantha",
    demo: "#",
    featured: false,
    category: "Web Application",
    period: "2024"
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website with dark mode, beautiful animations, and optimized performance. Built with Next.js 15 and Tailwind CSS featuring glassmorphism design.",
    image: "/project6.jpg",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "CSS Animations"],
    github: "https://github.com/Harin-Gayantha",
    demo: "#",
    featured: false,
    category: "Frontend",
    period: "2024 - Present"
  }
];

export default function ProjectsPage() {
  const projects = loadProjectsFromMarkdown();
  const allProjects = projects.length > 0 ? projects : featuredProjects;

  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-purple-100/20 to-pink-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-32 h-32 bg-gradient-to-tr from-blue-100/20 to-cyan-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-bl from-emerald-100/20 to-green-100/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 fade-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my development work, featuring modern web applications and innovative solutions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center fade-up delay-200">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-3 flex items-center justify-center">
              <span className="text-white text-sm">⭐</span>
            </div>
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {allProjects.filter(p => p.featured !== false).slice(0, 2).map((project, index) => (
              <article 
                key={project.title}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 fade-up"
                style={{ animationDelay: `${400 + index * 200}ms` }}
              >
                {/* Project Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="text-6xl opacity-50">🚀</div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                      {project.category || "Web App"}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {(project.tech || []).map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 dark:from-blue-900/30 dark:to-purple-900/30 dark:text-blue-300 border border-blue-200/50 dark:border-blue-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4 pt-4">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors text-sm font-medium"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all text-sm font-medium"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center fade-up delay-600">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mr-3 flex items-center justify-center">
              <span className="text-white text-sm">💼</span>
            </div>
            Other Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.slice(2).map((project, index) => (
              <article 
                key={project.title}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 fade-up"
                style={{ animationDelay: `${800 + index * 150}ms` }}
              >
                {/* Project Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">💻</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                      {project.category || "Web"}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1">
                    {(project.tech || []).slice(0, 3).map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {(project.tech || []).length > 3 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                        +{(project.tech || []).length - 3}
                      </span>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3 pt-2">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        GitHub →
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                      >
                        Demo →
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center fade-up delay-1000">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's create something amazing together!
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get In Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


