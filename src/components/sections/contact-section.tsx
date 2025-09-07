import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#8B5CF6] via-[#7C3AED] to-[#EC4899] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-300 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Let's Work Together
                </h2>
                <p className="text-lg text-white/90 leading-relaxed">
                  I'm passionate about creating innovative solutions that drive business growth and user satisfaction. 
                  With expertise in full-stack development and scalable architectures, I help transform ideas into 
                  powerful digital experiences. Let's collaborate to bring your vision to life.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors duration-200">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm font-medium">Email</p>
                    <a 
                      href="mailto:jagadeesan1104@gmail.com"
                      className="text-white font-medium hover:text-white/80 transition-colors duration-200"
                    >
                      jagadeesan1104@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors duration-200">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm font-medium">Phone</p>
                    <a 
                      href="tel:+919080064685"
                      className="text-white font-medium hover:text-white/80 transition-colors duration-200"
                    >
                      +91 9080064685
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors duration-200">
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm font-medium">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/jagadeesan-dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-white/80 transition-colors duration-200"
                    >
                      linkedin.com/in/jagadeesan-dev
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors duration-200">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm font-medium">Location</p>
                    <p className="text-white font-medium">Chennai, India</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a
                  href="mailto:jagadeesan1104@gmail.com"
                  className="inline-flex items-center space-x-3 bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/90 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  <span>GET IN TOUCH</span>
                </a>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                {/* Profile Avatar Placeholder */}
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center border border-white/20">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">J</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-white">Jagadeesan</h3>
                      <p className="text-white/70">Full Stack Developer</p>
                      <p className="text-white/60 text-sm">Available for new opportunities</p>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-400 rounded-full opacity-80"></div>
                <div className="absolute top-1/2 -left-2 w-4 h-4 bg-pink-400 rounded-full opacity-60"></div>
              </div>

              {/* Background decorative circles */}
              <div className="absolute top-8 right-8 w-32 h-32 bg-white/5 rounded-full filter blur-xl"></div>
              <div className="absolute bottom-8 left-8 w-24 h-24 bg-cyan-400/20 rounded-full filter blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;