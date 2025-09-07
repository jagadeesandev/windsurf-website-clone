import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Monitor, Database, Smartphone, Brain } from "lucide-react";

const ProjectsDemo = () => {
  const projects = [
    {
      id: 1,
      title: "Payroll Management Software",
      description: "Comprehensive payroll solution handling both staff and contract workers with automated salary calculations, tax deductions, and compliance reporting.",
      technologies: ["React", "Node.js", "PostgreSQL", "Express.js", "PDF Generation"],
      outcomes: "Reduced payroll processing time by 75% and eliminated manual errors for 500+ employees",
      category: "Enterprise Software",
      icon: <Database className="h-8 w-8" />,
      gradient: "from-purple-500 to-pink-500",
      mockupColor: "bg-gradient-to-br from-purple-100 to-pink-100"
    },
    {
      id: 2,
      title: "Biometric Attendance Integration",
      description: "Seamless integration between biometric attendance systems and ERP platforms with real-time synchronization and automated reporting.",
      technologies: ["Python", "REST APIs", "MySQL", "Redis", "WebSocket"],
      outcomes: "Improved attendance accuracy by 98% and automated timesheet generation for multiple locations",
      category: "System Integration",
      icon: <Monitor className="h-8 w-8" />,
      gradient: "from-cyan-500 to-blue-500",
      mockupColor: "bg-gradient-to-br from-cyan-100 to-blue-100"
    },
    {
      id: 3,
      title: "QR-based Canteen Management",
      description: "Modern canteen management system with QR code ordering, digital payments, and inventory tracking for corporate food services.",
      technologies: ["Next.js", "MongoDB", "Payment Gateway", "QR Generation", "Analytics"],
      outcomes: "Increased order efficiency by 60% and reduced food waste by 40% across 5 corporate locations",
      category: "Digital Solution",
      icon: <Smartphone className="h-8 w-8" />,
      gradient: "from-emerald-500 to-teal-500",
      mockupColor: "bg-gradient-to-br from-emerald-100 to-teal-100"
    },
    {
      id: 4,
      title: "AI-powered Automation Platform",
      description: "Intelligent automation system leveraging LLM models for document processing, data extraction, and workflow optimization across business processes.",
      technologies: ["Python", "OpenAI API", "LangChain", "FastAPI", "Docker", "MLOps"],
      outcomes: "Automated 80% of document processing tasks and reduced manual workload by 12 hours per day",
      category: "AI Innovation",
      icon: <Brain className="h-8 w-8" />,
      gradient: "from-orange-500 to-yellow-500",
      mockupColor: "bg-gradient-to-br from-orange-100 to-yellow-100"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A1628] via-[#1A2332] to-[#0A1628] relative overflow-hidden">
      {/* Background Wave Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 1200 800" className="w-full h-full">
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
            opacity="0.1"
          />
          <path
            d="M0,600 C400,500 800,700 1200,600 L1200,800 L0,800 Z"
            fill="url(#waveGradient)"
            opacity="0.05"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white border-none">
            PORTFOLIO
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
            Key Projects: From ERP Solutions to AI Innovation
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Showcasing enterprise-grade solutions that have transformed business operations and delivered measurable results across diverse industries.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="bg-[#1A2332]/80 backdrop-blur-sm border-[#8B5CF6]/20 hover:border-[#8B5CF6]/40 transition-all duration-300 hover:transform hover:scale-105 group overflow-hidden"
            >
              <CardContent className="p-8">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white`}>
                    {project.icon}
                  </div>
                  <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                    {project.category}
                  </Badge>
                </div>

                {/* Project Mockup Placeholder */}
                <div className={`h-48 rounded-lg ${project.mockupColor} mb-6 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent backdrop-blur-sm" />
                  <div className="relative z-10 text-center">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${project.gradient} mx-auto mb-3 flex items-center justify-center text-white shadow-lg`}>
                      {project.icon}
                    </div>
                    <p className="text-sm text-gray-600 font-medium">Project Mockup</p>
                  </div>
                  {/* Glassmorphism overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#8B5CF6] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-[#EC4899] uppercase tracking-wide">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="text-xs bg-[#8B5CF6]/10 text-[#8B5CF6] border-[#8B5CF6]/20 hover:bg-[#8B5CF6]/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-[#06B6D4] uppercase tracking-wide">
                      Key Outcomes
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {project.outcomes}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] hover:from-[#7C3AED] hover:to-[#DB2777] text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            VIEW ALL PROJECTS
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <p className="text-gray-400 mt-4 text-sm">
            Explore the complete portfolio of innovative solutions and technical achievements
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-[#8B5CF6] rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-[#EC4899] rounded-full animate-pulse delay-1000" />
      <div className="absolute bottom-20 left-20 w-2 h-2 bg-[#06B6D4] rounded-full animate-pulse delay-2000" />
      <div className="absolute bottom-40 right-10 w-2 h-2 bg-[#FBBF24] rounded-full animate-pulse delay-500" />
    </section>
  );
};

export default ProjectsDemo;