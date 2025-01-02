import { motion } from "framer-motion"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0118] text-white p-8 relative overflow-hidden w-full flex flex-col items-center justify-center">
      {/* Purple glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
      
      <div className="max-w-4xl mx-auto relative w-full">
        {/* Intro section */}
        <div className="flex items-center gap-8 mb-20">
          <div className="relative">
            <img 
              src="jb.png"
              alt="Avatar illustration"
              width={300}
              height={300}
              className="relative z-10 rounded-full"
            />
          </div>
          
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg"
            >
              Hello! I Am <span className="text-purple-500">Javes Balaba</span>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <p className="text-gray-400">A Designer who</p>
              <h1 className="text-5xl font-bold">
                Judges a book<br />
                by its <span className="text-purple-500">cover</span>...
              </h1>
              <p className="text-sm text-gray-400">
                Because if the cover does not impress what else can?
              </p>
            </motion.div>
          </div>
        </div>

        {/* Career section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold">
            I&apos;m a Backend Developer.
          </h2>
          
          <p className="text-lg">
            Currently, I&apos;m a Backend Developer at{" "}
            <a 
              href="https://facebook.com" 
              className="text-blue-500 hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
                Freelancer
            </a>
            ,
          </p>
          
          <p className="text-gray-300 leading-relaxed max-w-2xl">
            A self-taught Backend Developer, functioning in the industry for 3+ years now.
            I make meaningful and delightful digital products that create an equilibrium
            between user needs and business goals.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

