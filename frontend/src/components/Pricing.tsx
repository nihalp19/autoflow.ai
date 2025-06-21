import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Crown } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter Flow",
      price: "₹25,000",
      period: "per bot",
      description: "Perfect for small businesses getting started",
      features: [
        "1 Custom Bot (Auto-Reply or Lead Capture)",
        "Basic Setup & Integration",
        "7 Days Support",
        "Basic Analytics Dashboard",
        "Email Support"
      ],
      popular: false,
      icon: Star
    },
    {
      name: "Growth Flow",
      price: "₹65,000",
      period: "per package",
      description: "Most popular choice for growing businesses",
      features: [
        "3 Custom Bots of Your Choice",
        "Advanced Setup & Integration",
        "30 Days Premium Support",
        "Advanced Analytics & Reporting",
        "Priority Phone Support",
        "1 Free Optimization Session"
      ],
      popular: true,
      icon: Crown
    },
    {
      name: "Enterprise Flow",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited Custom Bots",
        "Complete Automation Suite",
        "90 Days White-Glove Support",
        "Custom Analytics Dashboard",
        "24/7 Dedicated Support",
        "Monthly Strategy Sessions",
        "Custom Integrations"
      ],
      popular: false,
      icon: Crown
    }
  ];

  return (
    <section id="pricing" className="py-12 lg:py-20 bg-gradient-to-b from-aurum-gray to-black">
      <div className="container mx-auto px-[30px] md:px-[40px] lg:px-[80px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-6">
            Quality Over <span className="text-aurum-red">Noise</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 lg:mb-8">
            Aurumflow is private—and it's intentional.
          </p>
          <div className="w-16 lg:w-24 h-1 bg-aurum-red mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: plan.popular 
                  ? "0 25px 50px rgba(240, 54, 54, 0.4)" 
                  : "0 20px 40px rgba(240, 54, 54, 0.2)",
                y: -5
              }}
              className={`relative rounded-2xl p-6 lg:p-8 transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-aurum-red/20 to-aurum-gray border-2 border-aurum-red'
                  : 'bg-aurum-gray/50 backdrop-blur-sm border border-gray-800 hover:border-aurum-red/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-aurum-red text-white px-3 py-1 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6 lg:mb-8">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-r ${
                    plan.popular ? 'from-aurum-red to-red-600' : 'from-gray-600 to-gray-700'
                  } flex items-center justify-center mx-auto mb-3 lg:mb-4 hover:shadow-lg hover:shadow-aurum-red/50 transition-all`}
                >
                  <plan.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-3 lg:mb-4 text-sm lg:text-base">{plan.description}</p>
                
                <div className="mb-4 lg:mb-6">
                  <span className="text-2xl lg:text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-gray-400 ml-2 text-sm lg:text-base">{plan.period}</span>}
                </div>
              </div>

              <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <Check className="w-4 h-4 lg:w-5 lg:h-5 text-aurum-red mr-2 lg:mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm lg:text-base">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: plan.popular 
                    ? "0 10px 30px rgba(240, 54, 54, 0.5)"
                    : "0 10px 30px rgba(240, 54, 54, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 lg:py-4 rounded-lg font-semibold transition-all text-sm lg:text-base ${
                  plan.popular
                    ? 'bg-aurum-red hover:bg-red-600 text-white shadow-lg hover:shadow-aurum-red/50'
                    : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-aurum-red'
                }`}
              >
                {plan.name === "Enterprise Flow" ? "Contact Us" : "Get Started"}
              </motion.button>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Pricing;