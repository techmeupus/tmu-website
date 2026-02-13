'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';

// Counter Component with Framer Motion
interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  delay?: number;
}

function AnimatedCounter({ target, suffix = '', prefix = '', duration = 2, delay = 0 }: CounterProps) {
  const controls = useAnimation();
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      const startTime = Date.now();
      const endTime = startTime + duration * 1000;

      const updateCounter = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / (duration * 1000), 1);
        
        // Ease out cubic for smooth animation
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(easedProgress * target);
        
        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };

      setTimeout(() => {
        requestAnimationFrame(updateCounter);
      }, delay * 1000);
    }
  }, [isInView, target, duration, delay]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {prefix}{count}{suffix}
    </motion.span>
  );
}

export default function Hero() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Counter container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  } as const;

  // Hero content animation
  const heroContentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  } as const;

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut" as const
      }
    },
    tap: { scale: 0.95 }
  } as const;

  return (
    <section className="relative min-h-screen overflow-hidden py-12 ">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-800/80 to-gray-900/90 z-10"></div>
        <div className="absolute inset-0 bg-gray-900/40 z-5"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
        >
          <source
            src="/video/hero.mp4"
            type="video/mp4"
          />
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80" 
            alt="Background" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </video>
      </div>

      {/* Gray Transparent Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-800/50 to-gray-900/60 z-15"></div>

      {/* Floating Elements - Animated with Framer Motion */}
      <motion.div 
        className="hidden md:block absolute top-20 left-10 w-16 h-16 bg-white/20 rounded-full z-20"
        animate={{ 
          y: [0, -20, 0],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      />
      <motion.div 
        className="hidden md:block absolute top-40 right-20 w-24 h-24 bg-blue-500/30 rounded-full z-20"
        animate={{ 
          y: [0, -20, 0],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }
        }}
      />
      <motion.div 
        className="hidden md:block absolute bottom-20 left-1/4 w-12 h-12 bg-white/20 rounded-full z-20"
        animate={{ 
          y: [0, -20, 0],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }
        }}
      />

      <div ref={ref} className="container-custom relative z-30 min-h-screen flex items-center justify-center px-4">
        <div className="flex flex-col items-center justify-center text-center w-full py-8 md:py-0">
          {/* Center Content */}
          <motion.div 
            className="text-white max-w-4xl mx-auto"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={heroContentVariants}
          >
            <div className="mb-4 md:mb-8"></div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Own Your
              <motion.span 
                className="block text-primary mt-2 md:mt-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Digital Space
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto px-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Build a stronger digital presence and drive faster growth with our end-to-end technology solutions for modern businesses.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center mb-8 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button 
                className="bg-primary text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl text-base sm:text-lg w-full sm:w-auto min-w-[200px] sm:min-w-[220px]"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                Start Growing Now
              </motion.button>
              <motion.button 
                className="bg-gray-800/80 backdrop-blur-sm text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold transition-all duration-300 border border-gray-600/50 text-base sm:text-lg w-full sm:w-auto min-w-[200px] sm:min-w-[220px]"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                See Case Studies
              </motion.button>
            </motion.div>
            
            {/* Trust Indicators with Animated Counters */}
            <motion.div 
              className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.div 
                className="text-center backdrop-blur-sm bg-gray-800/70 rounded-2xl p-4 sm:p-6 border border-gray-600/40"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: 'rgba(31, 41, 55, 0.85)',
                  transition: { duration: 0.2 }
                }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  <AnimatedCounter target={200} suffix="+" duration={2} delay={0.1} />
                </div>
                <div className="text-gray-300 text-sm sm:text-base">Projects Delivered</div>
              </motion.div>
              
              <motion.div 
                className="text-center backdrop-blur-sm bg-gray-800/70 rounded-2xl p-4 sm:p-6 border border-gray-600/40"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: 'rgba(31, 41, 55, 0.85)',
                  transition: { duration: 0.2 }
                }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  <AnimatedCounter target={98} suffix="%" duration={2} delay={0.3} />
                </div>
                <div className="text-gray-300 text-sm sm:text-base">Client Satisfaction</div>
              </motion.div>
              
              <motion.div 
                className="text-center backdrop-blur-sm bg-gray-800/70 rounded-2xl p-4 sm:p-6 border border-gray-600/40"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: 'rgba(31, 41, 55, 0.85)',
                  transition: { duration: 0.2 }
                }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  <AnimatedCounter target={24} suffix="/7" duration={2} delay={0.5} />
                </div>
                <div className="text-gray-300 text-sm sm:text-base">Support Available</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave Divider - Only shown on mobile */}
      <div className="block md:hidden absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg className="relative block w-full h-12" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                fill="#1f2937"></path>
        </svg>
      </div>
    </section>
  );
}