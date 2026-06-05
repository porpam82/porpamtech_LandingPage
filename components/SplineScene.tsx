'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function AnimatedOrb() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer glow */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-purple-600/20 via-blue-500/15 to-teal-400/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      {/* Inner orb */}
      <motion.div
        className="relative w-48 h-48 rounded-full bg-gradient-to-br from-purple-500/40 via-blue-500/30 to-teal-400/20 backdrop-blur-sm border border-white/10"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 360],
        }}
        transition={{
          scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
        }}
      >
        {/* Inner ring */}
        <motion.div
          className="absolute inset-4 rounded-full border border-white/20"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-teal-400"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
      {/* Orbital particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-purple-400/60"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 8 + i * 3,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            transformOrigin: `${100 + i * 20}px center`,
          }}
        />
      ))}
    </div>
  )
}

export default function SplineScene() {
  const [SplineComponent, setSplineComponent] = useState<React.ComponentType<{ scene: string }> | null>(null)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    let mounted = true
    import('@splinetool/react-spline')
      .then((mod) => {
        if (mounted) {
          setSplineComponent(() => mod.default)
        }
      })
      .catch(() => {
        if (mounted) setHasError(true)
      })
    return () => { mounted = false }
  }, [])

  if (hasError || !SplineComponent) {
    return <AnimatedOrb />
  }

  return (
    <div className="w-full h-full">
      <SplineComponent scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
    </div>
  )
}
