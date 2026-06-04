import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, Briefcase } from 'lucide-react'

const experiences = [
  {
    title: 'Graduate Research Assistant',
    company: 'Tribhuvan University',
    period: '2025 - Present',
    description: 'Conducting research in machine learning and data analytics.',
  },
  {
    title: 'Software Developer Intern',
    company: 'Tech Company',
    period: '2023 - 2024',
    description: 'Developed web applications using React and Node.js.',
  },
]

const education = [
  {
    degree: 'Master of Information Technology',
    institution: 'Tribhuvan University, Nepal',
    period: '2025 - Present',
    description: 'Specializing in Software Engineering and Data Science.',
  },
  {
    degree: 'Bachelor of Computer Science',
    institution: 'Far-western University, Nepal',
    period: '2021 - 2025',
    description: 'Graduated with distinction.',
  },
  {
    degree: 'AAHW-(Auxiliary Ayurvedic Health Worker)',
    institution: 'CTEVT, Nepal',
    period: '2017 - 2019',
    description: 'Graduated with distinction.',
  },
]

export default function About() {
  return (
    <section className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About <span className="text-primary">Me</span>
          </h1>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="md:col-span-2 space-y-4">
            <p className="text-muted-foreground leading-relaxed text-pretty">
              I am a passionate software developer and MIT student at Tribhuvan
              University, Nepal. My journey in technology started during my
              undergraduate years, where I discovered my love for building
              digital solutions that make a difference.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Currently, I am focused on web development, machine learning, and
              building scalable applications. I believe in writing clean,
              maintainable code and creating user experiences that are both
              beautiful and functional.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              When I&apos;m not coding, you can find me exploring new technologies,
              contributing to open-source projects, or mentoring junior
              developers in my community.
            </p>
          </div>

          {/* Quick Info */}
          <div className="space-y-4">
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 text-muted-foreground"
            >
              <MapPin className="text-primary" size={20} />
              <span>Kathmandu, Nepal</span>
            </motion.div>
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 text-muted-foreground"
            >
              <GraduationCap className="text-primary" size={20} />
              <span>MIT Student</span>
            </motion.div>
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 text-muted-foreground"
            >
              <Briefcase className="text-primary" size={20} />
              <span>Open to Work</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Briefcase className="text-primary" size={24} />
            Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 5 }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="font-semibold text-foreground">{exp.title}</h3>
                  <span className="text-sm text-primary font-mono flex items-center gap-1">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-2">{exp.company}</p>
                <p className="text-muted-foreground">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <GraduationCap className="text-primary" size={24} />
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ x: 5 }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                  <span className="text-sm text-primary font-mono flex items-center gap-1">
                    <Calendar size={14} />
                    {edu.period}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-2">{edu.institution}</p>
                <p className="text-muted-foreground">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
