import React from "react"
import { Code, Database, GitBranch, Cloud, Container, FileCode, Terminal, Workflow, Bot, Zap, Settings, FileText } from "lucide-react"

const technologies = [
  {
    name: "Frappe Framework",
    icon: <Code className="w-12 h-12" />,
    category: "Backend Framework"
  },
  {
    name: "ERPNext",
    icon: <Settings className="w-12 h-12" />,
    category: "ERP System"
  },
  {
    name: "Python",
    icon: <FileCode className="w-12 h-12" />,
    category: "Programming Language"
  },
  {
    name: "MySQL/MariaDB",
    icon: <Database className="w-12 h-12" />,
    category: "Database"
  },
  {
    name: "Azure",
    icon: <Cloud className="w-12 h-12" />,
    category: "Cloud Platform"
  },
  {
    name: "Docker",
    icon: <Container className="w-12 h-12" />,
    category: "Containerization"
  },
  {
    name: "Git/GitHub",
    icon: <GitBranch className="w-12 h-12" />,
    category: "Version Control"
  },
  {
    name: "REST APIs",
    icon: <Terminal className="w-12 h-12" />,
    category: "API Development"
  },
  {
    name: "LangChain",
    icon: <Bot className="w-12 h-12" />,
    category: "AI Framework"
  },
  {
    name: "Azure OpenAI",
    icon: <Zap className="w-12 h-12" />,
    category: "AI Services"
  },
  {
    name: "N8N Workflow",
    icon: <Workflow className="w-12 h-12" />,
    category: "Automation"
  },
  {
    name: "VS Code",
    icon: <FileText className="w-12 h-12" />,
    category: "IDE"
  }
]

const TechStack = () => {
  return (
    <section className="py-20 bg-[#0A1628]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technologies & Tools I Work With
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building robust, scalable enterprise solutions
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative bg-[#1A2332] rounded-xl p-6 border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="text-gray-300 group-hover:text-white transition-colors duration-300 group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.3)]">
                  {tech.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1 group-hover:text-purple-200 transition-colors duration-300">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {tech.category}
                  </p>
                </div>
              </div>

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              {/* Border glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center">
          <p className="text-sm text-gray-400">
            Specialized in enterprise-grade ERP solutions and AI-powered automation workflows
          </p>
        </div>
      </div>
    </section>
  )
}

export default TechStack