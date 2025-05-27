import { User, Calendar, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full mb-6"></div>
          <p className="text-slate-600 text-center max-w-3xl">
            I'm an enthusiastic and dynamic undergraduate in Electrical and Information Engineering,
            passionate about applying technical knowledge to solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="bg-blue-50 p-6 md:p-10 rounded-xl">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Personal Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600/10 p-2 rounded-full">
                  <User size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-500">Full Name</h4>
                  <p className="text-slate-800">Abeywardana Munasinghe Arachchige Hashan Sandaruwan</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-600/10 p-2 rounded-full">
                  <Calendar size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-500">Date of Birth</h4>
                  <p className="text-slate-800">11th September 2000 (23 years)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-600/10 p-2 rounded-full">
                  <MapPin size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-500">Address</h4>
                  <p className="text-slate-800">Munasinghegiri, Opatha, Uluvitike, Galle</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Languages</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-700 font-medium">English</span>
                    <span className="text-slate-500 text-sm">Professional</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-700 font-medium">Sinhala</span>
                    <span className="text-slate-500 text-sm">Native</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">My Journey</h3>
            <p className="text-slate-600 mb-4">
              As an undergraduate at the University of Ruhuna specializing in Electrical and Information Engineering, 
              I'm driven by a passion for innovation and problem-solving. With a strong academic record reflected in my 
              3.73 GPA, I consistently apply theoretical knowledge to practical applications.
            </p>
            <p className="text-slate-600 mb-4">
              My experience as a Development Assistant at Siyolak Pvt (Ltd.) provided me with valuable industry exposure, 
              enhancing my understanding of real-world applications of engineering principles. This experience, combined with 
              my academic background, has shaped my approach to engineering challenges.
            </p>
            <p className="text-slate-600 mb-6">
              I'm particularly interested in the intersection of electrical engineering and information technology, with a focus 
              on sustainable solutions that can make a positive impact. My goal is to become an industry expert who can 
              contribute to technological advancements while prioritizing sustainability.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Electrical Engineering</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Information Technology</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Sustainability</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Problem Solving</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Leadership</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;