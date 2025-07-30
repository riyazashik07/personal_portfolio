'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  const words = ['Full Stack Developer', 'Web Developer', 'UI/UX Enthusiast', 'Problem Solver'];

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-300 top-10">
      {/* Unique Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-blue-300/30 dark:border-blue-400/40 rounded-lg rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-400/20 dark:bg-purple-400/30 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-pink-400/20 dark:bg-pink-400/30 rotate-45 animate-spin delay-2000" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 border-2 border-cyan-300/30 dark:border-cyan-400/40 rounded-full animate-pulse delay-500"></div>
        
        {/* Floating code symbols */}
        <div className="absolute top-1/3 left-1/4 text-blue-300/20 dark:text-blue-400/30 text-4xl font-mono animate-float">{'<>'}</div>
        <div className="absolute top-1/2 right-1/3 text-purple-300/20 dark:text-purple-400/30 text-3xl font-mono animate-float delay-1000">{'{ }'}</div>
        <div className="absolute bottom-1/3 left-1/3 text-pink-300/20 dark:text-pink-400/30 text-2xl font-mono animate-float delay-2000">{'</>'}</div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 dark:from-blue-400/20 dark:to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 dark:from-purple-400/20 dark:to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-pink-400/10 to-cyan-400/10 dark:from-pink-400/20 dark:to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Enhanced Profile Image */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              {/* Main profile container with increased height */}
              <div className="w-40 h-48 sm:w-48 sm:h-56 mx-auto rounded-3xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 p-1 glow-animation shadow-2xl dark:shadow-blue-500/25">
                <div className="w-full h-full rounded-3xl bg-white dark:bg-gray-800 flex flex-col items-center justify-center relative overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600"></div>
                  
                  {/* Profile content */}
                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-3 shadow-lg">
                      <span className="text-2xl sm:text-3xl font-bold text-white">RJ</span>
                    </div>
                    {/* <img src="/images/profile.png" alt="Riyaz J" className="w-20 h-20 sm:w-24 sm:h-24 rounded-full" /> */}
                    <div className="text-center">
                      <div className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-200">Riyaz J</div>
                      <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Developer</div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 dark:bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-blue-400 dark:bg-blue-500 rounded-full animate-pulse delay-500"></div>
                </div>
              </div>
              
              {/* Rotating border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-3xl border-2 border-dashed border-blue-300/50 dark:border-blue-400/60"
              />
              
              {/* Floating elements around profile */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400/80 dark:bg-yellow-500/90 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-xs">⚡</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-pink-400/80 dark:bg-pink-500/90 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-xs">💻</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Riyaz J</span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-8 h-12"
          >
            <span className="border-r-2 border-blue-500 pr-2">
              {displayText}
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about creating innovative web solutions and bringing ideas to life through code. 
            I specialize in modern web technologies and love building user-friendly applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <Download size={20} />
              Download CV
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-gray-400 dark:text-gray-500 cursor-pointer"
            >
              <ChevronDown size={32} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;