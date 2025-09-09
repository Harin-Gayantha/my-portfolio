import Image from "next/image";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Beautiful Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient Wave Background */}
        <div className="absolute inset-0 gradient-wave-1"></div>
        <div className="absolute inset-0 gradient-wave-2"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/15 rounded-full particle-float-1"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-purple-400/20 rounded-full particle-float-2"></div>
        <div className="absolute top-1/2 left-1/6 w-3 h-3 bg-emerald-400/12 rounded-full particle-float-3"></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-pink-400/18 rounded-full particle-float-4"></div>
        <div className="absolute top-1/6 right-1/6 w-1 h-1 bg-yellow-400/20 rounded-full particle-float-5"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-cyan-400/15 rounded-full particle-float-6"></div>
        
        {/* Enhanced Floating Code Snippets */}
        <div className="absolute top-20 left-10 text-xs text-blue-300/25 font-mono code-glow code-float-1">
          {'{ console.log("Hello World"); }'}
        </div>
        <div className="absolute top-40 right-20 text-xs text-purple-300/25 font-mono code-glow code-float-2">
          {'const developer = () => magic;'}
        </div>
        <div className="absolute bottom-32 left-20 text-xs text-emerald-300/25 font-mono code-glow code-float-3">
          {'npm install creativity'}
        </div>
        <div className="absolute top-60 left-1/3 text-xs text-pink-300/25 font-mono code-glow code-float-4">
          {'git commit -m "awesome"'}
        </div>
        <div className="absolute bottom-60 right-1/2 text-xs text-cyan-300/25 font-mono code-glow code-float-5">
          {'function() { return ✨; }'}
        </div>
        
        {/* Enhanced Geometric Shapes with Glow */}
        <div className="absolute top-16 right-1/4 w-8 h-8 border-2 border-blue-300/20 rotate-45 geometric-glow geometric-float-1"></div>
        <div className="absolute bottom-20 right-10 w-6 h-6 bg-gradient-to-br from-green-400/15 to-emerald-500/15 rounded-full geometric-glow geometric-float-2"></div>
        <div className="absolute top-1/3 left-16 w-4 h-8 bg-gradient-to-t from-purple-400/15 to-pink-400/15 geometric-glow geometric-float-3"></div>
        <div className="absolute bottom-40 right-1/3 w-10 h-2 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 geometric-glow geometric-float-4"></div>
        <div className="absolute top-1/2 right-1/5 w-6 h-6 border-2 border-cyan-300/20 rounded-full geometric-glow geometric-float-5"></div>
        
        {/* Enhanced Tech Icons with Pulsing Effects */}
        <div className="absolute top-32 right-16 w-8 h-8 tech-icon-pulse tech-icon-1">
          <div className="w-full h-full bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-lg transform rotate-12 tech-glow"></div>
        </div>
        <div className="absolute bottom-60 left-1/4 w-10 h-10 tech-icon-pulse tech-icon-2">
          <div className="w-full h-full border-2 border-orange-400/25 rounded-lg transform -rotate-12 tech-glow"></div>
        </div>
        <div className="absolute top-80 right-1/3 w-7 h-7 tech-icon-pulse tech-icon-3">
          <div className="w-full h-full bg-gradient-to-tr from-green-400/20 to-emerald-500/20 rounded-full tech-glow"></div>
        </div>
        <div className="absolute top-1/4 left-1/5 w-6 h-6 tech-icon-pulse tech-icon-4">
          <div className="w-full h-full bg-gradient-to-bl from-purple-400/20 to-pink-500/20 rounded tech-glow"></div>
        </div>
        
        {/* Enhanced Binary Code Rain with Glow */}
        <div className="absolute top-0 left-1/2 text-xs text-blue-200/15 font-mono binary-glow binary-rain-1">
          1010110<br/>0110101<br/>1100110<br/>0101011<br/>1001101
        </div>
        <div className="absolute top-0 right-1/4 text-xs text-green-200/15 font-mono binary-glow binary-rain-2">
          1100101<br/>0011010<br/>1010011<br/>1101100<br/>0110110
        </div>
        <div className="absolute top-0 left-1/6 text-xs text-purple-200/12 font-mono binary-glow binary-rain-3">
          0101010<br/>1110001<br/>0011100<br/>1010101
        </div>
        
        {/* Orbiting Elements */}
        <div className="absolute top-1/2 left-1/2 w-32 h-32 orbit-container">
          <div className="absolute w-3 h-3 bg-blue-400/20 rounded-full orbit-element-1"></div>
          <div className="absolute w-2 h-2 bg-purple-400/20 rounded-full orbit-element-2"></div>
          <div className="absolute w-2 h-2 bg-emerald-400/20 rounded-full orbit-element-3"></div>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-10">
          {/* Text */}
          <div>
            <span className="text-xs tracking-[0.2em] text-yellow-700 fade-up">UNDERGRADUATE SOFTWARE ENGINEER</span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight fade-up delay-200">Hello, my name is Harin Wijethunga</h1>
            <p className="mt-4 text-sm sm:text-base text-black/70 dark:text-white/70 max-w-md fade-up delay-400">I am an undergraduate Software Engineering student with a strong foundation in coding, problem-solving, and system design. I enjoy building user-friendly and efficient applications using modern technologies. I am eager to apply my skills, contribute to real-world projects, and keep learning as I grow in the software industry.</p>
            {/* Professional Availability Section */}
            <div className="mt-6 p-5 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-900/10 dark:to-indigo-900/10 rounded-lg border border-blue-200/30 dark:border-blue-700/30 fade-up delay-500">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3 tracking-wide">SEEKING OPPORTUNITIES</h3>
                  <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed">
                    <p>Currently seeking <span className="font-medium text-gray-900 dark:text-white">Software Engineering Internship</span> positions</p>
                    <p>Available for <span className="font-medium text-gray-900 dark:text-white">6-month</span> or <span className="font-medium text-gray-900 dark:text-white">full-time training</span> programs</p>
                    <p>Focus areas: <span className="font-medium text-gray-900 dark:text-white">Web Development • Backend Systems • Full-Stack Solutions</span></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3 fade-up delay-600">
              <a href="/projects" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">View Projects</a>
              <a href="http://www.linkedin.com/in/harin-gayantha-" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 transform hover:scale-105 transition-all duration-200">LinkedIn</a>
            </div>
          </div>
          {/* Image with blob */}
          <div className="relative h-[260px] sm:h-[360px]">
            <div className="absolute right-[-40px] top-[-20px] h-[300px] w-[300px] sm:h-[420px] sm:w-[420px] bg-[#f7c948] rounded-[40%_60%_60%_40%/55%_45%_55%_45%] blob-animate hue-animate" />
            <div className="absolute right-0 bottom-0 h-[260px] w-[200px] sm:h-[360px] sm:w-[280px] overflow-hidden rounded-[32px] shadow-xl float-animate">
              <Image src="/harin.jpg" alt="Harin portrait" fill className="object-cover"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
