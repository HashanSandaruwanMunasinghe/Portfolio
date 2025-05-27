import { Code, Database, Layout, Settings, Brain, Users } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { 
      name: 'Electrical Installations', 
      percentage: 90,
      icon: <Settings className="text-blue-600" size={20} />
    },
    { 
      name: 'AutoCAD, 3ds Max', 
      percentage: 85,
      icon: <Settings className="text-blue-600\" size={20} />
    },
    { 
      name: 'C, C++, Python, MATLAB', 
      percentage: 88,
      icon: <Code className="text-blue-600" size={20} /> 
    },
    { 
      name: 'SQL', 
      percentage: 80,
      icon: <Database className="text-blue-600\" size={20} />
    },
    { 
      name: 'HTML, CSS, JavaScript', 
      percentage: 82,
      icon: <Layout className="text-blue-600" size={20} />
    }
  ];

  const softSkills = [
    { 
      name: 'Management Skills', 
      percentage: 88,
      icon: <Brain className="text-blue-600\" size={20} />
    },
    { 
      name: 'Creativity', 
      percentage: 92,
      icon: <Brain className="text-blue-600" size={20} />
    },
    { 
      name: 'Teamwork', 
      percentage: 95,
      icon: <Users className="text-blue-600\" size={20} />
    },
    { 
      name: 'Presentation skills', 
      percentage: 87,
      icon: <Brain className="text-blue-600" size={20} />
    },
    { 
      name: 'Leadership', 
      percentage: 90,
      icon: <Users className="text-blue-600\" size={20} />
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full mb-6"></div>
          <p className="text-slate-600 text-center max-w-3xl">
            A combination of technical expertise and soft skills that allow me to excel in the field of electrical and information engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-8 flex items-center gap-2">
              <Settings size={24} className="text-blue-600" />
              Technical Skills
            </h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="bg-blue-50 p-1.5 rounded-full">
                        {skill.icon}
                      </div>
                      <span className="font-medium text-slate-800">{skill.name}</span>
                    </div>
                    <span className="text-sm text-slate-500">{skill.percentage}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-8 flex items-center gap-2">
              <Brain size={24} className="text-blue-600" />
              Soft Skills
            </h3>
            
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="bg-blue-50 p-1.5 rounded-full">
                        {skill.icon}
                      </div>
                      <span className="font-medium text-slate-800">{skill.name}</span>
                    </div>
                    <span className="text-sm text-slate-500">{skill.percentage}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Skills Visualization */}
        <div className="mt-16 bg-slate-50 p-8 rounded-xl">
          <h3 className="text-xl font-semibold text-slate-800 mb-6 text-center">Skills Breakdown</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[...technicalSkills, ...softSkills].map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative mb-3">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center bg-white shadow-sm">
                    <div className="text-2xl text-blue-600">{skill.icon}</div>
                  </div>
                  <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#e2e8f0"
                      strokeWidth="6"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="6"
                      strokeDasharray="283"
                      strokeDashoffset={283 - (283 * skill.percentage) / 100}
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                </div>
                <p className="text-sm font-medium text-slate-700 text-center">{skill.name.split(',')[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;