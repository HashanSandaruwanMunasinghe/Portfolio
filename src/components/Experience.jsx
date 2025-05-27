import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full mb-6"></div>
          <p className="text-slate-600 text-center max-w-3xl">
            My professional journey and experience in the field of electrical and information engineering.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 md:pl-0">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-[7.5rem] top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            {/* Experience Item */}
            <div className="relative flex flex-col md:flex-row md:items-start gap-4 md:gap-8 mb-12">
              {/* Timeline Circle */}
              <div className="hidden md:flex absolute left-[7.3rem] w-4 h-4 bg-blue-600 rounded-full shadow"></div>
              
              {/* Date */}
              <div className="flex md:justify-end md:w-[7rem] md:pr-8 items-center gap-2 md:gap-0 text-slate-500 font-medium">
                <Calendar size={18} className="md:hidden text-blue-600" />
                <span>2021 - 2022</span>
              </div>
              
              {/* Content */}
              <div className="flex-1 bg-slate-50 p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-50 p-2 rounded-full">
                    <Briefcase size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-800">Development Assistant</h4>
                    <p className="text-slate-600">Siyolak Pvt (Ltd.)</p>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-4">
                  Worked as a Development Assistant at Siyolak Private Limited, where I gained valuable experience in the field of electrical engineering and project development.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></div>
                    <p className="text-slate-700">Assisted in the development and implementation of electrical projects</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></div>
                    <p className="text-slate-700">Collaborated with senior engineers on project planning and execution</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></div>
                    <p className="text-slate-700">Participated in technical documentation and reporting</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></div>
                    <p className="text-slate-700">Gained hands-on experience with electrical installation and testing</p>
                  </div>
                </div>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Project Development</span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Electrical Engineering</span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Technical Documentation</span>
                </div>
              </div>
            </div>
            
            {/* Current Status */}
            <div className="relative flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
              {/* Timeline Circle */}
              <div className="hidden md:flex absolute left-[7.3rem] w-4 h-4 bg-green-500 rounded-full shadow animate-pulse"></div>
              
              {/* Date */}
              <div className="flex md:justify-end md:w-[7rem] md:pr-8 items-center gap-2 md:gap-0 text-slate-500 font-medium">
                <Calendar size={18} className="md:hidden text-green-500" />
                <span>Present</span>
              </div>
              
              {/* Content */}
              <div className="flex-1 bg-slate-50 p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                <h4 className="text-xl font-semibold text-slate-800">Currently pursuing B.Sc. Engineering</h4>
                <p className="text-slate-600 mt-2">
                  Focusing on gaining academic knowledge and practical skills in Electrical and Information Engineering at the University of Ruhuna, with a GPA of 3.73.
                </p>
                <p className="text-slate-600 mt-2">
                  Actively participating in extracurricular activities and seeking opportunities to apply engineering principles to real-world problems.
                </p>
              </div>
            </div>
          </div>
          
          {/* Skills Gained */}
          <div className="mt-16 bg-slate-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Key Skills Gained from Experience</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h4 className="text-lg font-medium text-blue-600 mb-3">Technical Skills</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                    <span className="text-slate-700">Electrical installation techniques</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                    <span className="text-slate-700">Project development methodologies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                    <span className="text-slate-700">Technical documentation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                    <span className="text-slate-700">Testing and quality assurance</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h4 className="text-lg font-medium text-blue-600 mb-3">Professional Skills</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                    <span className="text-slate-700">Team collaboration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                    <span className="text-slate-700">Time management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                    <span className="text-slate-700">Problem-solving in real-world scenarios</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                    <span className="text-slate-700">Professional communication</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;