import { motion } from "framer-motion"
import { Button } from "./ui/button"

interface WorkCard {
  title: string
  description: string
  icon: string
}

const workCards: WorkCard[] = [
  {
    title: "Full Stack Web-Dev",
    description: "Developed and maintained scalable web applications using React, Node.js, and PostgreSQL. Implemented responsive designs and RESTful APIs.",
    icon: "Icon1.svg",
  },
  {
    title: "Amazon Account Manager",
    description: "Optimized product listings, managed inventory, and implemented marketing strategies resulting in 40% increase in sales. Handled client relationships and marketplace compliance.",
    icon: "Icon2.svg",
  },
  {
    title: "Search Engine Optimization",
    description: "Improved website rankings through keyword research, content optimization, and technical SEO. Achieved 65% increase in organic traffic across client websites.",
    icon: "Icon3.svg",
  },
  {
    title: "Back-End Web-Dev",
    description: "Built robust server architectures and APIs using Python and Node.js. Implemented database solutions and enhanced system performance through optimization.",
    icon: "Icon4.svg",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function WorkExperience() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12"
        >
          Work Experience
        </motion.h2>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {workCards.map((card, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-purple-600/50 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50" />
              <div className="relative bg-purple-950/40 rounded-3xl p-6 h-full border border-purple-500/20 backdrop-blur-sm">
                <div className="flex items-start gap-6">
                  <div className="w-40 h-40 rounded-2xl bg-transparent p-4 flex items-center justify-center">
                    <img 
                      src={card.icon} 
                      alt="" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl font-semibold">{card.title}</h3>
                    <p className="text-gray-400 text-sm">{card.description}</p>
                    <Button 
                      variant="ghost" 
                      className="bg-purple-900/50 hover:bg-purple-800/50 text-xs"
                    >
                      LEARN MORE
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WorkExperience;
