'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
// import LoadingScreen from '@/components/common/LoadingScreen';

export default function Home() {
  // const [isLoading, setIsLoading] = useState(true);
  // setIsLoading(false);
  // useEffect(() => {
    // const timer = setTimeout(() => {
    //   setIsLoading(false);
    // }, 2000);

    // return () => clearTimeout(timer);
  // }, []);

  return (
    <>
    <Navbar />
    <main>
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Skills />
    <Contact />
     </main>
    <Footer />
    </>
  )
}
    // <AnimatePresence mode="wait">
    //   {isLoading ? (
    //     <LoadingScreen key="loading" />
    //   ) : (
    //     <motion.div
    //       key="main"
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       transition={{ duration: 0.5 }}
    //     >
    // <>
    //       <Navbar />
    //       <main>
    //         <Hero />
    //         <About />
    //         <Experience />
    //         <Projects />
    //         <Skills />
    //         <Contact />
    //       </main>
    //       <Footer />
    //       </>
    //       );
    //     }
        // </motion.div>
      // )}
    // </AnimatePresence>
  // );
// }