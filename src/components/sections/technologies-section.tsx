export const TechnologiesSection = () => {
  const technologies = [
    {
      name: "Frappe Framework",
      logo: "https://frappe.io/files/frappe-framework-logo.svg",
      darkLogo: true
    },
    {
      name: "ERPNext",
      logo: "https://erpnext.com/files/erpnext-logo.svg",
      darkLogo: true
    },
    {
      name: "Python",
      logo: "https://www.python.org/static/community_logos/python-logo-generic.svg",
      darkLogo: true
    },
    {
      name: "Azure",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
      darkLogo: false
    },
    {
      name: "Docker",
      logo: "https://www.docker.com/wp-content/uploads/2022/03/horizontal-logo-monochromatic-white.svg",
      darkLogo: false
    },
    {
      name: "MySQL",
      logo: "https://labs.mysql.com/common/logos/mysql-logo.svg",
      darkLogo: true
    },
    {
      name: "Git",
      logo: "https://git-scm.com/images/logos/downloads/Git-Logo-2Color.svg",
      darkLogo: true
    },
    {
      name: "VS Code",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
      darkLogo: true
    },
    {
      name: "OpenAI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
      darkLogo: true
    },
    {
      name: "LangChain",
      logo: "https://python.langchain.com/img/brand/wordmark.png",
      darkLogo: true
    },
    {
      name: "N8N",
      logo: "https://n8n.io/favicon.svg",
      darkLogo: true
    },
    {
      name: "REST APIs",
      logo: "https://www.svgrepo.com/show/120832/api.svg",
      darkLogo: true
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Experienced with industry-leading technologies and frameworks
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 items-center justify-center">
          {technologies.map((tech, index) => (
            <div 
              key={tech.name}
              className="flex items-center justify-center p-6 rounded-lg bg-card hover:bg-card/80 transition-all duration-300 hover:scale-105 group"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 flex items-center justify-center">
                  <img
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    className={`max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110 ${
                      tech.darkLogo ? 'filter brightness-0 invert' : ''
                    }`}
                    onError={(e) => {
                      // Fallback to a simple text badge if image fails
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="w-16 h-16 rounded-lg bg-primary flex items-center justify-center text-xs font-semibold text-white text-center px-2">${tech.name}</div>`;
                      }
                    }}
                  />
                </div>
                <span className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;