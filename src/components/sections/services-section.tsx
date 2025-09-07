import { ArrowRight, Building2, Rocket, Zap, Code, Cloud, Settings } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-[#0A1628] overflow-hidden">
      {/* Background Wave Pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#EC4899" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M0,300 C480,200 960,400 1440,300 L1440,0 L0,0 Z"
            fill="url(#wave-gradient-1)"
          />
          <path
            d="M0,600 C480,500 960,700 1440,600 L1440,800 L0,800 Z"
            fill="url(#wave-gradient-1)"
          />
        </svg>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#1A2332] rounded-full mb-6">
            <span className="text-sm font-medium text-[#8B5CF6] uppercase tracking-wider">
              SERVICES
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Services for Businesses and Startups
          </h2>
          <p className="text-lg text-[#F3F4F6] max-w-3xl mx-auto">
            Tailored solutions to accelerate your growth and streamline your operations
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* FOR BUSINESSES Card */}
          <div className="group relative bg-[#1A2332] rounded-2xl p-8 lg:p-10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            {/* Purple Gradient Background */}
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
              <div className="w-full h-full bg-gradient-to-br from-[#8B5CF6] via-[#EC4899] to-[#8B5CF6]" />
            </div>
            
            {/* Decorative Wave */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
              <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M128,0 C96,32 64,16 32,48 C16,64 0,80 0,96 L0,0 Z"
                  fill="url(#purple-gradient)"
                />
                <defs>
                  <linearGradient id="purple-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="relative z-10">
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-lg">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-semibold text-[#8B5CF6] uppercase tracking-wider">
                  FOR BUSINESSES
                </span>
              </div>

              {/* Main Headline */}
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Custom ERP Solutions That Scale
              </h3>

              <p className="text-[#F3F4F6] mb-8 leading-relaxed">
                Transform your business operations with tailored ERP solutions that grow with your company
              </p>

              {/* Service Features */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Settings className="w-5 h-5 text-[#8B5CF6]" />
                  <span className="text-[#F3F4F6]">ERPNext implementation, customization, and optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="w-5 h-5 text-[#8B5CF6]" />
                  <span className="text-[#F3F4F6]">Frappe app development</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-[#8B5CF6]" />
                  <span className="text-[#F3F4F6]">Business process automation</span>
                </div>
              </div>

              {/* CTA Button */}
              <button className="group/btn inline-flex items-center gap-2 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#8B5CF6]/25">
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>

          {/* FOR STARTUPS Card */}
          <div className="group relative bg-[#1A2332] rounded-2xl p-8 lg:p-10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            {/* Green Gradient Background */}
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
              <div className="w-full h-full bg-gradient-to-br from-[#10B981] via-[#06B6D4] to-[#10B981]" />
            </div>
            
            {/* Decorative Wave */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
              <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M128,0 C96,32 64,16 32,48 C16,64 0,80 0,96 L0,0 Z"
                  fill="url(#green-gradient)"
                />
                <defs>
                  <linearGradient id="green-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="relative z-10">
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-[#10B981] to-[#06B6D4] rounded-lg">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-semibold text-[#10B981] uppercase tracking-wider">
                  FOR STARTUPS
                </span>
              </div>

              {/* Main Headline */}
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                AI-Powered Development Solutions
              </h3>

              <p className="text-[#F3F4F6] mb-8 leading-relaxed">
                Accelerate your startup's growth with cutting-edge AI integration and modern web solutions
              </p>

              {/* Service Features */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-[#10B981]" />
                  <span className="text-[#F3F4F6]">LLM integration and automation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="w-5 h-5 text-[#10B981]" />
                  <span className="text-[#F3F4F6]">Custom web applications</span>
                </div>
                <div className="flex items-center gap-3">
                  <Cloud className="w-5 h-5 text-[#10B981]" />
                  <span className="text-[#F3F4F6]">Cloud deployment and DevOps</span>
                </div>
              </div>

              {/* CTA Button */}
              <button className="group/btn inline-flex items-center gap-2 bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#10B981]/25">
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;