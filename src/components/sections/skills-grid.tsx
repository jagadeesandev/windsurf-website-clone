import React from 'react';
import { Code, Settings, Cloud, Bot, Database, Workflow, Cpu, Rocket } from 'lucide-react';

const skillsData = [
  {
    icon: Code,
    title: "Frappe Framework Development",
    description: "Custom apps, doctypes, workflows",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Settings,
    title: "ERPNext Customization", 
    description: "Implementation and production support",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: Workflow,
    title: "Python & REST APIs",
    description: "Server-side scripting and integrations",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Cloud,
    title: "Azure Cloud Services",
    description: "VM, AKS, SQL Database, App Services",
    gradient: "from-green-500 to-teal-500"
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description: "Azure OpenAI, LangChain, LLM models",
    gradient: "from-purple-600 to-pink-600"
  },
  {
    icon: Database,
    title: "Database Management",
    description: "MySQL, MariaDB optimization",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Cpu,
    title: "System Integration",
    description: "Third-party APIs, payment processing",
    gradient: "from-cyan-600 to-blue-600"
  },
  {
    icon: Rocket,
    title: "DevOps & Deployment",
    description: "Docker, cloud deployment, troubleshooting",
    gradient: "from-yellow-600 to-red-500"
  }
];

const SkillsGrid = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full mb-6">
            EXPLORE SKILLS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Comprehensive Technical Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillsData.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                className={`relative p-6 rounded-2xl bg-gradient-to-br ${skill.gradient} group hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
              >
                <div className="relative z-10">
                  <div className="mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
                    {skill.title}
                  </h3>
                  
                  <p className="text-white/90 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
                
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;