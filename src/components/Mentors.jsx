import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import directorImage from '../../img/director.webp'

const mentors = [
  {
    name: 'Ayush Singh Rawat',
    role: 'Director',
    image: directorImage,
  }
]

export default function Mentors() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [preloadRef, preloadInView] = useInView({ triggerOnce: true, rootMargin: '2500px 0px' })

  // Preload images silently in the background when 2500px away
  useEffect(() => {
    if (!preloadInView) return
    mentors.forEach((mentor) => {
      const img = new Image()
      img.src = mentor.image
    })
  }, [preloadInView])

  return (
    <section className="section" id="mentors" ref={(node) => { ref(node); preloadRef(node); }}>
      <div className="container">
        <div className="section-header">
          <motion.h2
            className="section-title text-gradient"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: 'spring', bounce: 0.5 }}
          >
            Loving Mentors
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Trained professionals who nurture curiosity, creativity, and confidence.
          </motion.p>
        </div>

        <div className="mentors-grid" style={{ display: 'flex', justifyContent: 'center' }}>
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              className="clay-card mentor-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.2, type: 'spring', bounce: 0.5 }}
              style={{ maxWidth: '400px', width: '100%', backgroundColor: '#ffffff', aspectRatio: '1/1', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
            >
              <div className="mentor-bg-blob"></div>
              <div className="mentor-img-wrapper">
                <img 
                  src={mentor.image} 
                  alt={mentor.name} 
                  loading="lazy" 
                  decoding="async" 
                  width="300" 
                  height="400" 
                />
              </div>
              <h3 className="text-gradient">{mentor.name}</h3>
              <p>{mentor.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
