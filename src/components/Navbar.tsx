import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun, Waves, TreePine, Palette } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

const themes = [
  { id: 'dark', name: 'Dark', icon: Moon, color: 'bg-slate-700' },
  { id: 'light', name: 'Light', icon: Sun, color: 'bg-amber-400' },
  { id: 'ocean', name: 'Ocean', icon: Waves, color: 'bg-cyan-500' },
  { id: 'forest', name: 'Forest', icon: TreePine, color: 'bg-emerald-500' },
] as const

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [themeOpen, setThemeOpen] = useState(false)
  const location = useLocation()
  const { theme, setTheme } = useTheme()
  const themeRef = useRef<HTMLDivElement>(null)

  const currentTheme = themes.find(t => t.id === theme) || themes[0]
  const CurrentIcon = currentTheme.icon

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (themeRef.current && !themeRef.current.contains(event.target as Node)) {
        setThemeOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
    setThemeOpen(false)
  }, [location.pathname])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl backdrop-saturate-150 border-b border-border/40 shadow-sm shadow-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              animate={{
                       y: [0, -3, 0]
                       }}
                       transition={{
                       duration: 2,
                        repeat: Infinity
                        }}
                        whileHover={{
                         scale: 1.05
                        }}
                        whileTap={{
                        scale: 0.98
                         }}
              className="text-2xl
                         font-extrabold
                         tracking-wider
                       text-white
                         drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]
                          "
            >
              <span className="text-primary">{"< "}</span>
               <span className="animated-logo"> MY PORTFOLIO </span>
                          
              <span className="text-primary">{" />"}</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <motion.div
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    location.pathname === link.path
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}

            {/* Theme Dropdown - Desktop */}
            <div className="relative ml-3" ref={themeRef}>
              <motion.button
                onClick={() => setThemeOpen(!themeOpen)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center justify-center w-11 h-11 rounded-full border border-primary/30 transition-all duration-200 ${
  themeOpen
    ? 'bg-primary text-white shadow-lg shadow-primary/25'
    : 'bg-slate-700 text-white hover:bg-slate-600'
}`}
                aria-label="Change theme"
              >
                <Palette
  size={22}
  strokeWidth={2.8}
  className="text-white"
/>
              </motion.button>

              <AnimatePresence>
                {themeOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="absolute right-0 mt-3 p-2 bg-card/90 backdrop-blur-xl backdrop-saturate-150 border border-border/50 rounded-xl shadow-xl shadow-black/10 min-w-[160px]"
                  >
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 py-2">
                      Theme
                    </div>
                    {themes.map((t) => {
                      const Icon = t.icon
                      const isActive = theme === t.id
                      return (
                        <motion.button
                          key={t.id}
                          onClick={() => {
                            setTheme(t.id)
                            setThemeOpen(false)
                          }}
                          whileHover={{ x: 2 }}
                          whileTap={{ scale: 0.98 }}
                          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                            isActive
                              ? 'bg-primary/15 text-primary'
                              : 'text-foreground hover:bg-secondary/60'
                          }`}
                        >
                          <div className={`w-6 h-6 rounded-full ${t.color} flex items-center justify-center shadow-sm`}>
                            <Icon size={12} className="text-white" />
                          </div>
                          <span>{t.name}</span>
                          {isActive && (
                            <motion.div
                              layoutId="theme-indicator"
                              className="ml-auto w-2 h-2 rounded-full bg-primary"
                            />
                          )}
                        </motion.button>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Theme Button */}
            <motion.button
              onClick={() => {
                setThemeOpen(!themeOpen)
                setIsOpen(false)
              }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 ${
                themeOpen 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-foreground'
              }`}
              aria-label="Change theme"
            >
              <CurrentIcon size={18} />
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => {
                setIsOpen(!isOpen)
                setThemeOpen(false)
              }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 ${
                isOpen 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-foreground'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Theme Selector */}
      <AnimatePresence>
        {themeOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden bg-card/80 backdrop-blur-xl backdrop-saturate-150 border-b border-border/40 shadow-lg shadow-black/5 overflow-hidden"
          >
            <div className="px-4 py-4">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Select Theme
              </div>
              <div className="grid grid-cols-4 gap-3">
                {themes.map((t) => {
                  const Icon = t.icon
                  const isActive = theme === t.id
                  return (
                    <motion.button
                      key={t.id}
                      onClick={() => {
                        setTheme(t.id)
                        setThemeOpen(false)
                      }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-200 ${
                        isActive
                          ? 'bg-primary/20 ring-2 ring-primary'
                          : 'bg-secondary/50 hover:bg-secondary/80'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center shadow-md`}>
                        <Icon size={18} className="text-white" />
                      </div>
                      <span className={`text-xs font-medium ${isActive ? 'text-primary' : 'text-foreground'}`}>
                        {t.name}
                      </span>
                    </motion.button>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden bg-background/80 backdrop-blur-xl backdrop-saturate-150 border-b border-border/40 shadow-lg shadow-black/5 overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 active:scale-[0.98] ${
                        isActive
                          ? 'bg-primary/15 text-primary'
                          : 'text-foreground hover:bg-secondary/50 active:bg-secondary'
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full transition-colors ${
                        isActive ? 'bg-primary' : 'bg-muted-foreground/30'
                      }`} />
                      {link.name}
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
