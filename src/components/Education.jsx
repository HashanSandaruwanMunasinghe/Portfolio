import { School, Calendar, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: 'University of Ruhuna',
      degree: 'B.Sc. Engineering (Hons)',
      specialization: 'Electrical and Information Engineering',
      duration: '2022 - Present',
      gpa: 'GPA: 3.73',
      icon: <School size={24} className="text-blue-600" />
    },
    {
      institution: 'Amarasooriya College, Galle',
      degree: 'G.C.E. Advanced Level Examination (2020)',
      result: 'Result: 3As',
      duration: '2017 - 2020',
      icon: <School size={24} className="text-blue-600" />
    },
    {
      institution: 'Amarasooriya College, Galle',
      degree: 'G.C.E. Ordinary Level Examination',
      result: 'Result: 1A, 2B & 6Cs',
      duration: '2006 - 2016',
      icon: <School size={24} className="text-blue-600" />
    }
  ];

  const certifications = [
    {
      title: 'Certificate in Python for Beginners',
      institution: 'University of Moratuwa Sri Lanka',
      year: '2023',
      icon: <Award size={20} className="text-blue-600" />
    },
    {
      title: 'Certificate in Web Development for Beginners',
      institution: 'University of Moratuwa Sri Lanka',
      year: '2023',
      icon: <Award size={20} className="text-blue-600" />
    }
  ];

  return (
    <section id="education" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Education</h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full mb-6"></div>
          <p className="text-slate-600 text-center max-w-3xl">
            My academic journey has equipped me with a strong foundation in engineering principles and practical skills.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-slate-800 mb-8">Academic Background</h3>
            
            <div className="relative pl-8 md:pl-0">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-[7.5rem] top-0 bottom-0 w-0.5 bg-blue-200"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {educationData.map((item, index) => (
                  <div key={index} className="relative flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                    {/* Timeline Circle */}
                    <div className="hidden md:flex absolute left-[7.3rem] w-4 h-4 bg-blue-600 rounded-full shadow"></div>
                    
                    {/* Date */}
                    <div className="flex md:justify-end md:w-[7rem] md:pr-8 items-center gap-2 md:gap-0 text-slate-500 font-medium">
                      <Calendar size={18} className="md:hidden text-blue-600" />
                      <span>{item.duration}</span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="hidden md:block bg-blue-50 p-2 rounded-full">
                          {item.icon}
                        </div>
                        <h4 className="text-xl font-semibold text-slate-800">{item.institution}</h4>
                      </div>
                      <p className="text-slate-700 font-medium">{item.degree}</p>
                      {item.specialization && (
                        <p className="text-slate-600 mt-1">{item.specialization}</p>
                      )}
                      {item.gpa && (
                        <p className="text-blue-600 font-medium mt-2">{item.gpa}</p>
                      )}
                      {item.result && (
                        <p className="text-blue-600 font-medium mt-2">{item.result}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-slate-100">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Certifications</h3>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="bg-blue-50 p-2 rounded-full h-fit">
                      {cert.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-slate-800">{cert.title}</h4>
                      <p className="text-slate-600">{cert.institution}</p>
                      <p className="text-slate-500 text-sm mt-1">{cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 bg-white p-6 md:p-8 rounded-lg shadow-sm border border-slate-100">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Extra Curricular Activities</h3>
              
              <ul className="space-y-4 list-disc list-inside text-slate-600 marker:text-blue-600">
                <li>Volunteering for the Mehewara project of conducting O/L and A/L Mathematics Seminars by the Faculty of Engineering</li>
                <li>Volunteer member of the ECSL Electrician Guide, University of Ruhuna Team</li>
                <li>Professional Activities volunteer at IEEE Power and Energy Society, Sri Lanka 2024</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;