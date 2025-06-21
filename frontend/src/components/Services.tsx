import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Zap, Hash, RefreshCw, ShoppingBag, ArrowRight } from 'lucide-react';

const Services = () => {
  const problems = [
    "Manually responding to every DM and comment",
    "Missing leads while you sleep or focus on other tasks", 
    "Spending hours researching trending hashtags",
    "Losing potential customers who don't get immediate responses",
    "Repetitive customer service questions eating your time"
  ];

  const services = [
    {
      icon: MessageSquare,
      title: "Instant Lead Capture Bot",
      description: "Grabs user details when they DM a keyword",
      features: ["Keyword triggers", "Auto data collection", "CRM integration"]
    },
    {
      icon: Zap,
      title: "Smart Auto-Reply Bot", 
      description: "Replies instantly to common DMs (FAQs, links, booking)",
      features: ["Instant responses", "FAQ automation", "Booking links"]
    },
    {
      icon: Hash,
      title: "Hashtag Optimizer Agent",
      description: "Suggests high-reach hashtags using trends + AI",
      features: ["AI-powered", "Trend analysis", "Reach optimization"]
    },
    {
      icon: RefreshCw,
      title: "Follow-Up Reminder Bot",
      description: "Re-engages ghost leads after 24–48 hours",
      features: ["Smart timing", "Lead nurturing", "Conversion boost"]
    },
    {
      icon: ShoppingBag,
      title: "DM Shop Bot",
      description: "Turns DMs into a conversion funnel for your products/services",
      features: ["Sales funnel", "Product catalog", "Order processing"]
    }
  ];

  return (
    <section id="services" className="py-12 lg:py-20 bg-gradient-to-b from-black to-aurum-gray">
      <div className="container mx-auto px-[30px] lg:px-[80px]">
        {/* Problems Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-6">
            THE <span className="text-aurum-red">PROBLEMS:</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 lg:mb-8">
            You're spending hours on things bots could do.
          </p>
          <div className="w-16 lg:w-24 h-1 bg-aurum-red mx-auto"></div>
        </motion.div>

        {/* Problems List */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16 lg:mb-20"
        >
          <div className="grid gap-4 lg:gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(240, 54, 54, 0.2)"
                }}
                className="bg-aurum-gray/30 rounded-xl p-4 lg:p-6 border border-gray-800 hover:border-aurum-red/50 transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-aurum-red rounded-full mr-4 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm sm:text-base lg:text-lg">{problem}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Solutions Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-6">
            OUR <span className="text-aurum-red">SOLUTIONS:</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300">
            Custom n8n bots that work as your silent team members
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(240, 54, 54, 0.3)",
                y: -10
              }}
              className="bg-aurum-gray/50 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-gray-800 hover:border-aurum-red/50 transition-all duration-300 group"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 lg:w-16 lg:h-16 rounded-lg bg-gradient-to-r from-aurum-red to-red-600 flex items-center justify-center mb-4 lg:mb-6 group-hover:shadow-lg group-hover:shadow-aurum-red/50 transition-all"
              >
                <service.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
              </motion.div>
              
              <h3 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4 group-hover:text-aurum-red transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed mb-4 text-sm lg:text-base">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-xs lg:text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 bg-aurum-red rounded-full mr-2"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(240, 54, 54, 0.5)",
              backgroundColor: "#d32f2f"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-aurum-red hover:bg-red-600 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold flex items-center justify-center mx-auto group transition-all"
          >
            Get Your Custom Bot
            <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;