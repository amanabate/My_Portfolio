
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users, Award, BookOpen } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'JavaScript/TypeScript', level: 95, color: 'from-yellow-400 to-orange-500' },
    { name: 'React/Next.js', level: 90, color: 'from-blue-400 to-blue-600' },
    { name: 'Tailwind CSS', level: 92, color: 'from-cyan-400 to-teal-500' },
    { name: 'Node.js', level: 80, color: 'from-green-400 to-emerald-500' },
    { name: 'UI/UX Design', level: 85, color: 'from-purple-400 to-pink-500' },
    { name: 'Git/GitHub', level: 88, color: 'from-gray-400 to-gray-600' },
    { name: 'MySQL', level: 75, color: 'from-blue-300 to-blue-500' }, // Added MySQL
  ];

  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code with best practices',
    },
    {
      icon: Palette,
      title: 'Design System',
      description: 'Creating consistent and beautiful user interfaces with attention to detail',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, accessibility, and user experience',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams using Agile methodologies and version control',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Delivering pixel-perfect, cross-browser compatible solutions',
    },
    {
      icon: BookOpen,
      title: 'Learning',
      description: 'Constantly exploring new technologies and industry best practices',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate frontend developer with 3+ years of experience creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              My Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I started my journey in web development with a curiosity for how beautiful websites come to life. 
              What began as a hobby quickly evolved into a passion for creating user-centered digital experiences 
              that not only look great but perform exceptionally.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Today, I specialize in modern frontend technologies like React, TypeScript, and Tailwind CSS, 
              always staying current with the latest industry trends and best practices. I believe in writing 
              clean, maintainable code and creating interfaces that users love to interact with.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              When I'm not coding, you'll find me exploring new design trends, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Technical Skills
            </h3>
            {skills.map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {highlight.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
