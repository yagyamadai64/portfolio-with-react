import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp, Phone, MapPin, Facebook, MessageCircle } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/dashboard', label: 'GitHub', color: 'hover:bg-gray-700' },
  { icon: Linkedin, href: 'https://www.linkedin.com/feed', label: 'LinkedIn', color: 'hover:bg-blue-600' },
  { icon: Facebook, href: 'https://facebook.com/yogesa.madai', label: 'Facebook', color: 'hover:bg-blue-500' },
  { icon: MessageCircle, href: 'https://wa.me/+977 984-1854064', label: 'WhatsApp', color: 'hover:bg-green-500' },
  { icon: Mail, href: 'https://mail.google.com/mail/u/0/#inbox', label: 'Email', color: 'hover:bg-red-500' },
]

const contactInfo = [
  { icon: Phone, text: 'Call Me', href: 'tel:+9779841854064' },
  { icon: Mail, text: 'yagyamadai@gmail.com', href: 'yagyamadai@gmail.com' },
  { icon: MapPin, text: 'Kathmandu, Nepal', href: '#' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border/50 mt-auto">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-3xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                YBM
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              MIT Student at Tribhuvan University, Nepal. Passionate about creating innovative solutions and building impactful digital experiences.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 bg-card rounded-lg flex items-center justify-center text-muted-foreground hover:text-white border border-border transition-all duration-300 hover:-translate-y-1 ${color}`}
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold text-lg mb-5 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary rounded-full"></span>
            </h3>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200 text-sm flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-primary/50 rounded-full group-hover:bg-primary transition-colors"></span>
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground font-semibold text-lg mb-5 relative inline-block">
              Services
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary rounded-full"></span>
            </h3>
            <ul className="flex flex-col gap-3">
              {['Web Development', 'Mobile Apps', 'UI/UX Design', 'API Development', 'Database Design'].map((service) => (
                <li
  key={service}
  className="text-muted-foreground text-sm flex items-center gap-2 group cursor-pointer hover:text-primary hover:translate-x-1 transition-all duration-300"
>
  <span className="w-1.5 h-1.5 bg-primary/50 rounded-full group-hover:bg-primary transition-colors duration-300"></span>
  {service}
</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground font-semibold text-lg mb-5 relative inline-block">
              Get In Touch
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary rounded-full"></span>
            </h3>
            <ul className="flex flex-col gap-4">
              {contactInfo.map(({ icon: Icon, text, href }) => (
                <li key={text}>
                  <a
                    href={href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-start gap-3 group"
                  >
                    <span className="w-8 h-8 bg-card border border-border rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0">
                      <Icon size={16} />
                    </span>
                    <span className="pt-1">{text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
         <div className="border-t border-border/50 bg-background">
        <div className="max-w-6xl mx-auto px-4 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-muted-foreground text-sm text-center sm:text-left">
              © {currentYear} <span className="text-primary font-medium">Yagya Bahadur Madai</span>. All rights reserved.
            </p>

            {/* Made with love */}
            <p className="text-muted-foreground text-sm flex items-center gap-1.5">
              Crafted with <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> in Nepal
            </p>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-gradient-to-r from-primary to-cyan-500 rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
