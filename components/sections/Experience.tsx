'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Award, Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const workExperience = [
    {
      title: 'Frontend Developer',
      company: 'IRS Software',
      location: 'Chennai, India',
      period: '2018 - Present',
      type: 'Full-time',
      achievements: [
        'Spearheaded the development and customization of Perdix, a finance-focused platform for loan origination, customer onboarding, and credit assessment, using Angular to build responsive and user-friendly interfaces tailored to diverse client needs.',
        'Designed and implemented dynamic reports and dashboards for key financial metrics, leveraging Angular for front-end visualization and interactivity.',
        'Utilized PHP and MySQL to develop and optimize back-end functionalities for report generation, database management, and performance analytics.',
        'Automated spreadsheet-based workflows and mailing systems to send performance summaries, notifications, and compliance reports to stakeholders, enhancing operational efficiency.',
        'Collaborated with teams to integrate APIs for real-time data synchronization, including credit bureau lookups, KYC verification, OCR Integration and payment gateway integration.',
        'Managed project tracking and task assignments using Jira, ensuring timely delivery of features and bug fixes.',
        'Leveraged Git for version control and coordinated team codebase contributions to maintain a clean and efficient development pipeline.',
        'Improved application performance by 40% through optimization techniques',
        'Implemented CI/CD pipelines resulting in 60% faster deployment cycles',
        'Mentored 2 junior developers and conducted code reviews.',
      ],
      technologies: ['Angular', 'React', 'Node.js', 'MongoDB', 'AWS', 'Docker'],
    },
    {
      title: 'Production Executive',
      company: 'Exeter Premedia Serviced',
      location: 'Chennai, India',
      period: '2015 - 2018',
      type: 'Full-time',
      achievements: [
        'Exeter is end-to-end digital publishing services they have a web based application called Kriyadocs.',
        'Working closely with the development team to understand project requirements and testing objectives. Create detailed test plans, test cases for the manual testing of Kriyadocs. Gained experienced in Manual Testing.',
        'Responsibility of transforming composite materials, including text, equations, and tables, performing E-Book and XML conversions, encompassing metadata creation and DTD/schema development.',
        'Collaborate with team members to design and plan project objectives, timelines, and deliverables.',
        'Maintain effective communication with clients via email and handle client inquiries and concerns.',
        'Participated in agile development process and daily standups'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'XML', 'DTD', 'Schema'],
    }
  ];

  const education = [
    {
      degree: 'Master of Science (Computer Science)',
      institution: 'Alagappa University',
      location: 'Chennai, India',
      period: '2020 - 2022',
      grade: '8.5 CGPA',
      achievements: [
        'Graduated with First Class Honors',
        'President of Computer Science Club'
      ],
    },
    {
      degree: 'Bachelor of Computer Applications',
      institution: 'Alagappa University',
      location: 'Chennai, India',
      period: '2016 - 2017',
      grade: '8.5 CGPA',
      achievements: [
        'Graduated with First Class Honors'
      ],
    },
    {
      degree: 'Diploma in Computer Education',
      institution: 'Ramakrishna Mission Polytechnic College',
      location: 'Chennai, India',
      period: '2012 - 2015',
      grade: '70%',
      achievements: [
        'Graduated with First Class Honors'
      ],
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Government Boys Higher Secondary School',
      location: 'Arakkonam, India',
      period: '2011 - 2012',
      grade: '72%',
      achievements: [
        'Graduated with First Class Honors'
      ],
    },
  ];

  const TimelineItem = ({ item, index, isWork = true }: any) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
      className="relative"
    >
      {/* Timeline Line */}
      {index !== (isWork ? workExperience.length - 1 : education.length - 1) && (
        <div className={`absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b ${isWork ? 'from-blue-500 to-purple-600' : 'from-purple-500 to-pink-600'}`}></div>
      )}

      {/* Timeline Dot */}
      <div className={`absolute left-4 top-8 w-4 h-4 bg-gradient-to-br ${isWork ? 'from-blue-500 to-purple-600' : 'from-purple-500 to-pink-600'} rounded-full shadow-lg`}></div>

      {/* Content */}
      <div className="ml-12 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 card-3d">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">{isWork ? item.title : item.degree}</h4>
            <p className={`${isWork ? 'text-blue-600' : 'text-purple-600'} font-semibold`}>
              {isWork ? item.company : item.institution}
            </p>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
            <div className="flex items-center gap-1 mb-1">
              <Calendar size={16} />
              {item.period}
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              {item.location}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <span className={`inline-block ${isWork ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'} text-xs px-2 py-1 rounded-full`}>
            {isWork ? item.type : item.grade}
          </span>
        </div>

        <ul className="space-y-2 mb-4">
          {item.achievements.map((achievement, achIndex) => (
            <li key={achIndex} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
              <span className={`${isWork ? 'text-blue-500' : 'text-purple-500'} mt-2`}>•</span>
              {achievement}
            </li>
          ))}
        </ul>

        {isWork && (
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional experience and educational background that shaped my career
          </p>
        </motion.div>

        {/* Work Experience Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-bold mb-12 flex items-center gap-3"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Briefcase className="text-white" size={24} />
            </div>
            Work Experience
          </motion.h3>

          <div className="space-y-8">
            {workExperience.map((exp, index) => (
              <TimelineItem key={index} item={exp} index={index} isWork={true} />
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-bold mb-12 flex items-center gap-3"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
              <GraduationCap className="text-white" size={24} />
            </div>
            Education
          </motion.h3>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <TimelineItem key={index} item={edu} index={index} isWork={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;