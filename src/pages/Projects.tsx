import { motion } from 'framer-motion'
import { ExternalLink, Github, Folder } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce application with user authentication, product management, and payment integration.',
    technologies: ['HTML,CSS,JS', 'Tailwind CSS', 'MYSQL', 'PHP'],
    github: 'https://github.com/yagyamadai64',
    live: 'https://yagyamadai.com.np/food/index.php',
    featured: true,
  },
  {
    title: 'CryptoVerse',
    description:
      'A collaborative task management tool with real-time updates, drag-and-drop functionality, and team features.',
    technologies: ['HTML,CSS,JS,','Next.js', 'Bootstrap', 'MYSQL', 'PHP'],
    github: 'https://github.com/yagyamadai64/Cryptoverse1',
    live: 'https://cryptoverse1.vercel.app/',
    featured: true,
  },
  {
    title: 'Weather Dashboard',
    description:
      'A weather application that displays current conditions and forecasts using external APIs with beautiful visualizations.',
    technologies: ['React', 'Tailwind CSS', 'Weather API'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'Portfolio Website',
    description:
      'A personal portfolio website showcasing projects and skills with modern animations.',
    technologies: ['React', 'Vite', 'Framer Motion'],
    github: 'https://github.com',
    featured: false,
  },
  {
    title: 'Blog Platform',
    description:
      'A blogging platform with markdown support, comments, and user authentication.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com',
    featured: false,
  },
  {
    title: 'Chat Application',
    description:
      'Real-time chat application with private messaging and group chat features.',
    technologies: ['React', 'Firebase', 'WebSocket'],
    github: 'https://github.com',
    featured: false,
  },
]

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            My <span className="text-primary">Projects</span>
          </h1>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card border border-border rounded-lg p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <span className="text-primary font-mono text-sm">Featured Project</span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-1">
                    {project.title}
                  </h3>
                </div>
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub repository"
                  >
                    <Github size={22} />
                  </motion.a>
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="px-3 py-1 bg-green-500 text-white text-sm rounded-full flex items-center gap-1"
                      aria-label="Live demo"
                    >
                      <ExternalLink size={22} />
                    </motion.a>
                  )}
                </div>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded text-sm font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Other Projects
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-lg p-5 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <Folder className="text-primary" size={28} />
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub repository"
                    >
                      <Github size={18} />
                    </motion.a>
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Live demo"
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    )}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-muted-foreground font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
