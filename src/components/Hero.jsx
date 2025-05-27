import { ArrowRight, Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-16 md:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16">
          <div className="flex-1 order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4">
              Hi, I'm <span className="text-blue-600">Hashan Munasinghe</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-slate-600 mb-6">
              Electrical and Information Engineering Undergraduate
            </h2>
            <p className="text-slate-600 mb-8 max-w-2xl">
              Dynamic individual passionate about Electrotechnology and Information Systems, 
              aiming to become an industry expert in Electrical Engineering. Dedicated to 
              utilizing technical, management, and leadership skills for sustainable solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <a href="mailto:munasinghefirst@gmail.com" className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors">
                <Mail size={18} className="text-blue-600" />
                <span>munasinghefirst@gmail.com</span>
              </a>
              <a href="tel:+94766389033" className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors">
                <Phone size={18} className="text-blue-600" />
                <span>(+94) 76 638 9033</span>
              </a>
              <div className="flex items-center gap-2 text-slate-700">
                <MapPin size={18} className="text-blue-600" />
                <span>Galle, Sri Lanka</span>
              </div>
              <a 
                href="https://www.linkedin.com/in/hashanmunasinghe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={18} className="text-blue-600" />
                <span>hashanmunasinghe</span>
              </a>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-6 py-3 rounded-md font-medium flex items-center gap-2"
              >
                Get in Touch
                <ArrowRight size={18} />
              </a>
              <a 
                href="#projects" 
                className="bg-white hover:bg-slate-100 transition-colors text-slate-800 border border-slate-300 px-6 py-3 rounded-md font-medium"
              >
                View Projects
              </a>
            </div>
          </div>
          
          <div className="flex-1 order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-blue-600/10 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full bg-blue-600/20"></div>
              <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
  src="/home.jpeg"
  alt="Hashan Munasinghe"
  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;