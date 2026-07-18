import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import '../styles/index.css'

const programs = [
  {
    title: 'Class 1',
    age: '5.5 - 6.5 Years',
    description: 'Transitioning to primary education with advanced reading, math fundamentals, and interactive learning.',
    tags: ['Reading', 'Math Fundamentals', 'Interactive Learning', 'Growth'],
    image: '/assets/program_class_1.png',
    gradient: 'linear-gradient(135deg, #FCE7F3, #FBCFE8)',
    accent: '#EC4899',
  },
  {
    title: 'Class 2',
    age: '6.5 - 7.5 Years',
    description: 'Fostering independence, critical thinking, deeper academic concepts, and holistic development.',
    tags: ['Independence', 'Critical Thinking', 'Academics', 'Holistic'],
    image: '/assets/program_class_2.png',
    gradient: 'linear-gradient(135deg, #F3E8FF, #E9D5FF)',
    accent: '#A855F7',
  }
]

export default function Programs() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1, rootMargin: "-50px 0px" })

  return (
    <section className="section" id="programs" ref={ref} style={{ overflow: 'hidden' }}>
      <div className="container">
        <div className="section-header">
          <motion.h2
            className="section-title text-gradient"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ type: 'spring', bounce: 0.5 }}
          >
            Our Programs
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Designed progressively for your child's developmental milestones.
          </motion.p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              className="clay-card animated-border"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.8, type: 'spring', bounce: 0.3 }}
              style={{
                borderColor: program.accent,
                position: 'relative',
                transform: 'none',
                margin: 0,
                width: '100%',
                maxWidth: '400px',
                borderWidth: '4px',
                borderStyle: 'solid'
              }}
            >
              <div
                className="program-img-wrapper"
                style={{ background: program.gradient }}
              >
                <img src={program.image} alt={program.title} />
              </div>

              <div className="program-content">
                <span className="program-age" style={{ color: program.accent }}>{program.age}</span>
                <h3 style={{ color: program.accent }}>{program.title}</h3>
                <p>{program.description}</p>

                <div className="program-tags">
                  {program.tags.map((tag, i) => (
                    <span key={i} className="program-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
