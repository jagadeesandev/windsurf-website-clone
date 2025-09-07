import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Database, Brain } from "lucide-react"

const ExperienceDemo = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6] via-[#EC4899] to-[#06B6D4] opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/80 to-transparent" />
      
      {/* Wave Pattern Background */}
      <div className="absolute inset-0">
        <svg viewBox="0 0 1200 800" className="w-full h-full opacity-10">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
          <path 
            d="M0,400 C300,300 600,500 1200,400 L1200,800 L0,800 Z" 
            fill="url(#waveGradient)" 
            opacity="0.3"
          />
          <path 
            d="M0,500 C400,350 800,600 1200,450 L1200,800 L0,800 Z" 
            fill="url(#waveGradient)" 
            opacity="0.2"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-sm font-medium text-white">EXPERIENCE</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Professional Experience:
                <span className="block bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                  3.9 Years of Innovation
                </span>
              </h2>
            </div>

            {/* Current Role Highlight */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-sm font-medium text-[#10B981]">Current Position</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Product Engineer at ThePrevc</h3>
              <p className="text-[#F3F4F6] text-sm mb-4">Jun 2024 - Present</p>
              
              {/* Key Achievements */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-[#8B5CF6] mt-0.5 flex-shrink-0" />
                  <p className="text-[#F3F4F6] text-sm">
                    Developing pitch deck fundraising partner for startups using advanced LLM integration
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Database className="w-5 h-5 text-[#EC4899] mt-0.5 flex-shrink-0" />
                  <p className="text-[#F3F4F6] text-sm">
                    Building robust backend architecture with Frappe framework
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Code2 className="w-5 h-5 text-[#06B6D4] mt-0.5 flex-shrink-0" />
                  <p className="text-[#F3F4F6] text-sm">
                    Creating intuitive frontend experiences with React.js
                  </p>
                </div>
              </div>
            </div>

            {/* Previous Experience Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <h4 className="font-semibold text-white text-sm mb-1">Amilma Ice Creams</h4>
                <p className="text-[#F3F4F6] text-xs">Product Development</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <h4 className="font-semibold text-white text-sm mb-1">Faircode Technologies</h4>
                <p className="text-[#F3F4F6] text-xs">Software Engineer</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <h4 className="font-semibold text-white text-sm mb-1">Teampro HR</h4>
                <p className="text-[#F3F4F6] text-xs">Technical Specialist</p>
              </div>
            </div>

            <Button 
              className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] hover:from-[#7C3AED] hover:to-[#DB2777] text-white border-0 font-semibold px-8 py-3 h-auto transition-all duration-300 hover:shadow-lg hover:shadow-[#8B5CF6]/25 group"
            >
              VIEW FULL EXPERIENCE
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Mockup/Visual Side */}
          <div className="relative">
            {/* Code Editor Mockup */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden shadow-2xl">
              {/* Window Controls */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="text-xs text-[#F3F4F6] font-mono">jagadeesan-portfolio.tsx</div>
                <div className="w-12" />
              </div>
              
              {/* Code Content */}
              <div className="p-6 font-mono text-sm space-y-2 relative">
                <div className="text-[#8B5CF6]">const <span className="text-white">experience</span> = {'{'};</div>
                <div className="ml-4 text-[#06B6D4]">currentRole: <span className="text-[#FBBF24]">"Product Engineer"</span>,</div>
                <div className="ml-4 text-[#06B6D4]">company: <span className="text-[#FBBF24]">"ThePrevc"</span>,</div>
                <div className="ml-4 text-[#06B6D4]">totalYears: <span className="text-[#EC4899]">3.9</span>,</div>
                <div className="ml-4 text-[#06B6D4]">skills: [</div>
                <div className="ml-8 text-[#FBBF24]">"React.js", "Frappe", "LLM Integration"</div>
                <div className="ml-4 text-[#06B6D4]">],</div>
                <div className="ml-4 text-[#06B6D4]">passion: <span className="text-[#FBBF24]">"Building innovative solutions"</span></div>
                <div className="text-[#8B5CF6]">{'}'}</div>
                
                {/* Highlight overlay */}
                <div className="absolute top-20 left-6 right-6 h-8 bg-[#8B5CF6]/20 rounded border-l-2 border-[#8B5CF6] animate-pulse" />
              </div>
            </div>

            {/* Floating Achievement Cards */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#10B981] to-[#06B6D4] rounded-xl p-3 shadow-lg backdrop-blur-sm border border-white/20">
              <div className="text-white text-xs font-semibold">3.9 Years</div>
              <div className="text-white/80 text-xs">Experience</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] rounded-xl p-3 shadow-lg backdrop-blur-sm border border-white/20">
              <div className="text-white text-xs font-semibold">Full Stack</div>
              <div className="text-white/80 text-xs">Developer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceDemo