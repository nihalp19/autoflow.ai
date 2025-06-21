import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target, Clock } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.08
    }
  }
};

const titleWordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const statsVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.08,
      delayChildren: 0.6
    }
  }
};

const statItemVariants = {
  hidden: {
    opacity: 0,
    y: 15,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const Hero = () => {
  return (
    <section id="home" className="h-screen bg-gradient-to-br from-aurum-dark via-aurum-gray to-black relative overflow-hidden">
      {/* Background Effects */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(240, 54, 54, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(240, 54, 54, 0.05) 0%, transparent 50%)',
          backgroundSize: '100% 100%'
        }}
      />

      <div className="container mx-auto px-[30px]  z-10 h-full">
        <div className="flex flex-col items-center justify-center h-full text-center">
          {/* Main Content Container */}
          <motion.div
            className="max-w-4xl mx-auto space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(240, 54, 54, 0.3)"
                }}
                className="inline-flex items-center bg-aurum-red/10 backdrop-blur-sm text-aurum-red px-3 py-2 sm:px-4 sm:py-2.5 lg:px-5 lg:py-3 rounded-full text-xs sm:text-sm lg:text-base font-semibold border border-aurum-red/20"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-2 sm:mr-2.5" />
                </motion.div>
                Curated Flow Created for Cluttered World
              </motion.div>
            </motion.div>

            {/* Title */}
            <motion.div variants={titleVariants} className="space-y-2 sm:space-y-3 lg:space-y-4">
              <motion.h1
                className="font-bold leading-tight"
                variants={titleWordVariants}
              >
                {/* THE - Large */}
                <motion.span
                  className="block text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-1 sm:mb-2 lg:mb-3"
                  variants={titleWordVariants}
                >
                  THE
                </motion.span>

                {/* AURUM FLOW - Smaller, on one line */}
                <motion.div
                  className="flex items-center justify-center gap-2 sm:gap-3 lg:gap-4 mb-2 sm:mb-3 lg:mb-4"
                  variants={titleWordVariants}
                >
                  <motion.span
                    className="text-aurum-red text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold"
                    variants={titleWordVariants}
                    whileHover={{
                      textShadow: "0 0 20px rgba(240, 54, 54, 0.8)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    AURUM
                  </motion.span>
                  <motion.span
                    className="text-gray-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold"
                    variants={titleWordVariants}
                  >
                    FLOW
                  </motion.span>
                </motion.div>



              </motion.h1>
            </motion.div>

            {/* Description */}
            <motion.div
              variants={itemVariants}
              className="space-y-2 sm:space-y-3 max-w-3xl mx-auto"
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-light px-4 sm:px-0">
                Meet Your Silent Team Member: IG Bots by Aurumflow.
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-aurum-red font-semibold">
                Custom-built flows for your growth systems.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-5 justify-center items-center pt-3 sm:pt-4 lg:pt-6"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 30px rgba(240, 54, 54, 0.4)",
                  backgroundColor: "#d32f2f",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-aurum-red hover:bg-red-600 text-white px-5 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-xl font-semibold flex items-center justify-center group transition-all duration-300 text-sm sm:text-base lg:text-lg shadow-lg w-full sm:w-auto min-w-[180px] sm:min-w-[200px] lg:min-w-[220px]"
              >
                Join Discovery Call
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                </motion.div>
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 25px rgba(255, 255, 255, 0.1)",
                  borderColor: "#F03636",
                  backgroundColor: "rgba(240, 54, 54, 0.05)",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-600 hover:border-aurum-red text-white px-5 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base lg:text-lg backdrop-blur-sm w-full sm:w-auto min-w-[180px] sm:min-w-[200px] lg:min-w-[220px]"
              >
                View Our Process
              </motion.button>
            </motion.div>

          </motion.div>

          {/* Floating Background Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 8, -8, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-br from-aurum-red/10 via-transparent to-aurum-red/5 blur-3xl opacity-40"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
