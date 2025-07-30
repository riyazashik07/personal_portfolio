'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend Development',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { 
          name: 'React', 
          level: 90, 
          url: 'https://reactjs.org/',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        },
        { 
          name: 'Next.js', 
          level: 85, 
          url: 'https://nextjs.org/',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
        },
        { 
          name: 'TypeScript', 
          level: 80, 
          url: 'https://www.typescriptlang.org/',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
        },
        { 
          name: 'Tailwind CSS', 
          level: 85, 
          url: 'https://tailwindcss.com/',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
        },
        { 
          name: 'JavaScript', 
          level: 90, 
          url: 'https://javascript.info/',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
        },
        { 
          name: 'HTML/CSS', 
          level: 95, 
          url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
        },
      ],
    },
    {
      title: 'Backend Development',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { 
          name: 'Node.js', 
          level: 85, 
          url: 'https://nodejs.org/',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
        },
        { 
          name: 'Express.js', 
          level: 80, 
          url: 'https://expressjs.com/',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
        },
        { 
          name: 'Python', 
          level: 75, 
          url: 'https://www.python.org/',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
        },
        { 
          name: 'REST APIs', 
          level: 85, 
          url: 'https://restfulapi.net/',
          logo: 'https://img.icons8.com/color/48/api-settings.png'
        },
        { 
          name: 'GraphQL', 
          level: 70, 
          url: 'https://graphql.org/',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg'
        },
        { 
          name: 'JWT', 
          level: 80, 
          url: 'https://jwt.io/',
          logo: 'https://img.icons8.com/color/48/java-web-token.png'
        },
      ],
    },
    {
      title: 'Database & Storage',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { 
          name: 'MongoDB', 
          level: 85, 
          url: 'https://www.mongodb.com/',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
        },
        { 
          name: 'PostgreSQL', 
          level: 80, 
          url: 'https://www.postgresql.org/',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
        },
        { 
          name: 'MySQL', 
          level: 75, 
          url: 'https://www.mysql.com/',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
        },
        { 
          name: 'Redis', 
          level: 70, 
          url: 'https://redis.io/',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg'
        },
        { 
          name: 'Prisma', 
          level: 75, 
          url: 'https://www.prisma.io/',
          logo: 'https://img.icons8.com/fluency/48/prisma-orm.png'
        },
        { 
          name: 'Supabase', 
          level: 80, 
          url: 'https://supabase.com/',
          logo: 'https://img.icons8.com/fluency/48/supabase.png'
        },
      ],
    },
    {
      title: 'Mobile Development',
      color: 'from-orange-500 to-red-500',
      skills: [
        { 
          name: 'React Native', 
          level: 75, 
          url: 'https://reactnative.dev/',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        },
        { 
          name: 'Flutter', 
          level: 65, 
          url: 'https://flutter.dev/',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg'
        },
        { 
          name: 'Expo', 
          level: 80, 
          url: 'https://expo.dev/',
          logo: 'https://img.icons8.com/fluency/48/expo.png'
        },
        { 
          name: 'PWA', 
          level: 85, 
          url: 'https://web.dev/progressive-web-apps/',
          logo: 'https://img.icons8.com/color/48/progressive-web-app.png'
        },
      ],
    },
    {
      title: 'DevOps & Cloud',
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { 
          name: 'AWS', 
          level: 75, 
          url: 'https://aws.amazon.com/',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg'
        },
        { 
          name: 'Docker', 
          level: 70, 
          url: 'https://www.docker.com/',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
        },
        { 
          name: 'Vercel', 
          level: 85, 
          url: 'https://vercel.com/',
          logo: 'https://img.icons8.com/fluency/48/vercel.png'
        },
        { 
          name: 'Netlify', 
          level: 80, 
          url: 'https://www.netlify.com/',
          logo: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-color-tal-revivo.png'
        },
        { 
          name: 'CI/CD', 
          level: 75, 
          url: 'https://www.redhat.com/en/topics/devops/what-is-ci-cd',
          logo: 'https://img.icons8.com/color/48/infinity.png'
        },
      ],
    },
    {
      title: 'Tools & Others',
      color: 'from-teal-500 to-cyan-500',
      skills: [
        { 
          name: 'Git', 
          level: 90, 
          url: 'https://git-scm.com/',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
        },
        { 
          name: 'VS Code', 
          level: 95, 
          url: 'https://code.visualstudio.com/',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
        },
        { 
          name: 'Figma', 
          level: 70, 
          url: 'https://www.figma.com/',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
        },
        { 
          name: 'Postman', 
          level: 85, 
          url: 'https://www.postman.com/',
          logo: 'https://img.icons8.com/dusk/48/postman-api.png'
        },
        { 
          name: 'Webpack', 
          level: 70, 
          url: 'https://webpack.js.org/',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg'
        },
        { 
          name: 'Vite', 
          level: 80, 
          url: 'https://vitejs.dev/',
          logo: 'https://img.icons8.com/fluency/48/vite.png'
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden card-3d"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${category.color} p-6`}>
                <h3 className="text-xl font-bold text-white text-center">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="p-6 space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * skillIndex }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <a
                        href={skill.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        <img 
                          src={skill.logo} 
                          alt={skill.name}
                          className="w-8 h-8 object-contain"
                          onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')}
                        />
                        <span>{skill.name}</span>
                      </a>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + 0.1 * skillIndex }}
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8">What I Bring to the Table</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Full-Stack Development',
                description: 'End-to-end web application development from frontend to backend',
                icon: '🚀',
              },
              {
                title: 'Responsive Design',
                description: 'Mobile-first approach ensuring great UX across all devices',
                icon: '📱',
              },
              {
                title: 'Performance Optimization',
                description: 'Code optimization and best practices for fast, scalable applications',
                icon: '⚡',
              },
              {
                title: 'Modern Architecture',
                description: 'Clean, maintainable code following industry best practices',
                icon: '🏗️',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="text-center p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;