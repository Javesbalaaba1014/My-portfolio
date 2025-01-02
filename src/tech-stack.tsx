'use client'

import { motion } from "framer-motion"

const technologies = {
  topRow: [
    { name: "Figma", icon: "Rectangle 1.png" },
    { name: "React", icon: "Rectangle 2.png" },
    { name: "C#", icon: "Rectangle 3.png" },
    { name: "Node.js", icon: "Rectangle 4.png" },
    { name: "Redux", icon: "Rectangle 5.png" },
    { name: "JavaScript", icon: "Rectangle 6.png" },
    { name: "CSS", icon: "Rectangle 7.png" },
  ],
  bottomRow: [
    { name: "Adobe XD", icon: "Rectangle 8.png" },
    { name: "Next.js", icon: "Rectangle 9.png" },
    { name: "GraphQL", icon: "Rectangle 10.png" },
    { name: "Adobe Illustrator", icon: "Rectangle 11.png" },
    { name: "Premiere Pro", icon: "Rectangle 12.png" },
  ]
}

const orbitingIcons = Array(8).fill(null).map((_, i) => ({
  name: `Tech ${i + 1}`,
  icon: "jb.svg",
  rotation: (i * 360) / 8
}))

export function TechStack() {
  return (
    <section className="py-32 px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          I&apos;m currently looking to join a{" "}
          <span className="text-purple-500">cross-functional</span> team
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mb-16"
        >
          that values improving people&apos;s lives through accessible design
        </motion.p>

        {/* Top row of technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-8 mb-8 flex-wrap"
        >
          {technologies.topRow.map((tech, index) => (
            <motion.div
              key={tech.name}
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 relative"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom row of technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-8 mb-20 flex-wrap"
        >
          {technologies.bottomRow.map((tech, index) => (
            <motion.div
              key={tech.name}
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 relative"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Central logo with orbiting icons */}
        <div className="relative w-40 h-40 mx-auto">
          {/* Glowing effect */}
          <div className="absolute inset-0 bg-purple-600/20 rounded-full blur-[50px]" />
          
          {/* Central sigma symbol */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="relative z-10 w-full h-full bg-purple-600 rounded-full flex items-center justify-center"
          >
            <img src="jb.svg" alt="Sigma" className="w-full h-full object-contain rounded-full" />
          </motion.div>

          {/* Orbiting icons */}
          {orbitingIcons.map((icon, index) => (
            <motion.div
              key={index}
              className="absolute w-6 h-6"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                rotate: [icon.rotation, icon.rotation + 360]
              }}
              transition={{
                delay: 1 + (index * 0.1),
                rotate: {
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear"
                }
              }}
              style={{
                top: "50%",
                left: "50%",
                transform: `rotate(${icon.rotation}deg) translateX(100px) rotate(-${icon.rotation}deg)`
              }}
            >
              <img
                src={icon.icon}
                alt={icon.name}
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}

          {/* Orbital paths */}
          <div className="absolute inset-0 -m-16 rounded-full border border-purple-500/20" />
          <div className="absolute inset-0 -m-20 rounded-full border border-purple-500/15" />
          <div className="absolute inset-0 -m-24 rounded-full border border-purple-500/10" />
        </div>
      </div>
    </section>
  )
}

export default TechStack;
