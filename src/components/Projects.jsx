import { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Iconic structure of ROBO for XBOTICS'23",
      category: "engineering",
      image: "https://images.pexels.com/photos/8566470/pexels-photo-8566470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Designed and constructed an iconic robotic structure for the XBOTICS'23 competition, showcasing innovative engineering concepts and aesthetics.",
      technologies: ["AutoCAD", "3D Modeling", "Engineering Design"]
    },
    {
      id: 2,
      title: "Console-based Application for Polynomial Calculations",
      category: "programming",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Developed a console-based application for performing complex polynomial calculations, implementing advanced data structures and algorithms concepts.",
      technologies: ["C++", "Data Structures", "Algorithms"]
    },
    {
      id: 3,
      title: "Database for a Courier Management System",
      category: "database",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Created a comprehensive database solution for a courier management system, featuring order tracking, delivery scheduling, and reporting functionalities.",
      technologies: ["SQL", "Database Design", "ER Modeling"]
    },
    {
      id: 4,
      title: "Sustainable Building Structure Design",
      category: "engineering",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Proposed an innovative sustainable building structure for a design competition, incorporating eco-friendly materials and energy-efficient systems.",
      technologies: ["AutoCAD", "Sustainable Design", "3D Modeling"]
    }
  ];
  
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full mb-6"></div>
          <p className="text-slate-600 text-center max-w-3xl">
            A selection of my academic and personal projects that demonstrate my skills and interests.
          </p>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-slate-100 rounded-lg">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'all'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveTab('engineering')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'engineering'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Engineering
            </button>
            <button
              onClick={() => setActiveTab('programming')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'programming'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Programming
            </button>
            <button
              onClick={() => setActiveTab('database')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'database'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Database
            </button>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 transition-transform hover:-translate-y-1 hover:shadow-md">
              <div className="h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <button className="text-blue-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    View Details <ArrowRight size={16} />
                  </button>
                  <a href="#" className="bg-slate-100 p-2 rounded-md hover:bg-slate-200 transition-colors">
                    <ExternalLink size={16} className="text-slate-700" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-4">Interested in collaborating on a project?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white px-6 py-3 rounded-md font-medium"
          >
            Get in Touch <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;