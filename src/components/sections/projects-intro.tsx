export const ProjectsIntro = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-navy relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-accent-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-accent-pink rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl">
          {/* Section Label */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-navy/50 border border-secondary-navy mb-8">
            <span className="text-sm font-medium text-accent-cyan tracking-wide uppercase">
              Portfolio
            </span>
          </div>
          
          {/* Main Headline */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-pure-white mb-8 leading-tight">
            Projects That Make{" "}
            <span className="bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent">
              Impact
            </span>
          </h2>
          
          {/* Descriptive Content */}
          <div className="space-y-6 text-light-gray">
            <p className="text-lg sm:text-xl leading-relaxed">
              Explore a comprehensive portfolio of enterprise solutions that transform business operations through innovative technology. 
              Specializing in ERP implementations, intelligent automation, and AI-powered integrations that drive measurable results.
            </p>
            
            <p className="text-lg leading-relaxed">
              From customizing ERPNext modules to building sophisticated custom applications, my expertise spans the full spectrum 
              of enterprise software development. I excel in creating seamless integrations with third-party APIs, enabling 
              organizations to streamline their workflows and maximize operational efficiency.
            </p>
            
            <p className="text-lg leading-relaxed">
              Key specializations include advanced payroll management systems, biometric authentication integrations, 
              comprehensive canteen management solutions, and cutting-edge AI-powered automation tools. Each project is 
              crafted with precision to address specific business challenges while ensuring scalability and maintainability.
            </p>
          </div>
          
          {/* Feature Highlights */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-secondary-navy/30 backdrop-blur-sm rounded-lg p-4 border border-secondary-navy">
              <h4 className="text-accent-purple font-semibold mb-2">ERP Solutions</h4>
              <p className="text-sm text-light-gray">Custom ERPNext implementations</p>
            </div>
            
            <div className="bg-secondary-navy/30 backdrop-blur-sm rounded-lg p-4 border border-secondary-navy">
              <h4 className="text-accent-cyan font-semibold mb-2">API Integration</h4>
              <p className="text-sm text-light-gray">Third-party system connections</p>
            </div>
            
            <div className="bg-secondary-navy/30 backdrop-blur-sm rounded-lg p-4 border border-secondary-navy">
              <h4 className="text-accent-yellow font-semibold mb-2">Automation</h4>
              <p className="text-sm text-light-gray">AI-powered workflow optimization</p>
            </div>
            
            <div className="bg-secondary-navy/30 backdrop-blur-sm rounded-lg p-4 border border-secondary-navy">
              <h4 className="text-accent-pink font-semibold mb-2">Custom Apps</h4>
              <p className="text-sm text-light-gray">Tailored business solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsIntro;