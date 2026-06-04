import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Download, Eye, ChevronDown } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react'


export default function Home() {
   const [showCVMenu, setShowCVMenu] = useState(false)
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 pb-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Profile Photo with Animated Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative order-1 lg:order-2"
          >
            {/* Rotating Gradient Ring */}
<motion.div
  animate={{ rotate: 360 }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "linear"
  }}
  className="absolute inset-0 rounded-full"
  style={{
  background:
    "conic-gradient(from 0deg, #00ff99, #00ffff, #0080ff, #7d2cff, #ff00aa, #ff6600, #00ff99)",
  padding: "6px",
  filter: "drop-shadow(0 0 20px rgba(0,255,153,0.6))",
}}
>
  <div className="w-full h-full rounded-full bg-background" />
</motion.div>

            {/* Pulsing glow effect */}
            <motion.div
              animate={{ 
                boxShadow: [
                  '0 0 20px rgba(20, 184, 166, 0.3)',
                  '0 0 40px rgba(20, 184, 166, 0.5)',
                  '0 0 20px rgba(20, 184, 166, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-2 rounded-full"
            />

            {/* Photo container */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
              {/* Decorative dots */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
              >
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-primary rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${i * 45}deg) translateY(-140px) translateX(-50%)`,
                    }}
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </motion.div>

              {/* Main photo frame */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="absolute inset-2 rounded-full overflow-hidden border-4 border-primary/30 bg-gradient-to-br from-primary/20 to-secondary"
              >
                {/* Placeholder - Replace src with your actual photo */}
                <img
                  src="/profile.png"
                  alt="Yagya Bahadur Madai"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    // Fallback to initials if image not found
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling?.classList.remove('hidden')
                  }}
                />
                <div className="hidden w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                  <span className="text-6xl font-bold text-primary">YBM</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 flex-1">
            

             {/* Status Badge */}
            <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
             Open to New Opportunities

            </motion.div>

{/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-primary font-mono text-sm mb-4"
            >
              Hello, I am
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
               className="hero-title text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-balance"
            >
              YAGYA BAHADUR MADAI
            </motion.h1>

            {/* Title */}
           <motion.h2
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 min-h-[80px] flex justify-center lg:justify-start"
>
  <TypeAnimation
    sequence={[
      'MIT Student',
      2000,
      'Full Stack Developer',
      2000,
      'React Developer',
      2000,
      'Web Designer',
      2000,
      'Database Designer',
      2000,
      'AAHW Health worker',
      2000,
    ]}
     wrapper="span"
    speed={50}
    repeat={Infinity}
    cursor={false}
    className="text-primary"
  />
</motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted-foreground text-lg max-w-2xl mb-8 leading-relaxed text-pretty"
            >
              "Passionate Full Stack Developer focused on building modern, scalable and user-friendly web applications. Currently pursuing Master's in Information Technology while continuously exploring new technologies."
            </motion.p>

           {/* Statistics Section */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.35 }}
  className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
>
  <div className="rounded-xl border border-border bg-card/50 p-4 text-center backdrop-blur-sm">
    <h3 className="text-2xl font-bold text-primary">10+</h3>
    <p className="text-sm text-muted-foreground">Projects</p>
  </div>

  <div className="rounded-xl border border-border bg-card/50 p-4 text-center backdrop-blur-sm">
    <h3 className="text-2xl font-bold text-primary">TU</h3>
    <p className="text-sm text-muted-foreground">MIT Student</p>
  </div>

  <div className="rounded-xl border border-border bg-card/50 p-4 text-center backdrop-blur-sm">
    <h3 className="text-2xl font-bold text-primary">8+</h3>
    <p className="text-sm text-muted-foreground">Technologies</p>
  </div>

  <div className="rounded-xl border border-border bg-card/50 p-4 text-center backdrop-blur-sm">
    <h3 className="text-2xl font-bold text-primary">100%</h3>
    <p className="text-sm text-muted-foreground">Dedication</p>
  </div>
</motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-8"
            >
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors"
                >
                  View My Work
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border border-border rounded-lg font-medium text-foreground hover:bg-secondary transition-colors"
                >
                  Get In Touch
                </motion.button>
              </Link>
              {/* Download CV Button */}
               <div className="relative">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => setShowCVMenu(!showCVMenu)}
    className="px-6 py-3 bg-gradient-to-r from-primary to-teal-400 text-primary-foreground rounded-lg font-medium flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
  >
    <Download size={18} />
    Download CV
    <ChevronDown size={16} />
  </motion.button>

  {showCVMenu && (
    <div className="absolute top-full mt-2 right-0 w-48 rounded-lg border border-border bg-background shadow-xl z-50 overflow-hidden">
      <a
        href="/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-3 hover:bg-secondary transition-colors"
      >
        <Eye size={18} />
        View CV
      </a>

      <a
        href="/cv.pdf"
        download="cv.pdf"
        className="flex items-center gap-2 px-4 py-3 hover:bg-secondary transition-colors"
      >
        <Download size={18} />
        Download CV
      </a>
    </div>
  )}
</div>
            </motion.div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
