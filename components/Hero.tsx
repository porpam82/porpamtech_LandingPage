'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const SplineScene = dynamic(() => import('./SplineScene'), {
  ssr: false,
})

function SplineFallback() {
  return (
    <motion.div
      className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-purple-600/30 via-blue-500/20 to-teal-400/10 blur-3xl"
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gray-950">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-950 to-blue-900/20 animate-aurora" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-float animation-delay-400" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400"
            >
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              Inovacao em Tecnologia
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            >
              <span className="gradient-text">
                {'\u0041\u0075\u0074\u006F\u006D\u0061\u00E7\u00E3\u006F'}
              </span>
              ,{' '}
              <span className="text-white">
                {`Intelig\u00EAncia Artificial`}
              </span>{' '}
              <span className="text-gray-400">e</span>{' '}
              <span className="text-white">
                {`Software \u00E0 Medida`}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0"
            >
              Transformamos a sua empresa com {`solu\u00E7\u00F5es`} tecnol{'\u00F3'}gicas de ponta.
              Da {`automa\u00E7\u00E3o`} inteligente ao desenvolvimento personalizado, elevamos o seu {`neg\u00F3`}cio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contacto"
                className="group relative px-8 py-4 text-base font-medium text-white rounded-full bg-gradient-to-r from-purple-600 to-blue-600 overflow-hidden transition-all hover:shadow-xl hover:shadow-purple-500/25"
              >
                <span className="relative z-10">Fale Connosco</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="#servicos"
                className="px-8 py-4 text-base font-medium text-gray-300 rounded-full border border-white/10 hover:bg-white/5 hover:text-white hover:border-white/20 transition-all"
              >
                {`Ver Servi\u00E7os`}
              </a>
            </motion.div>
          </motion.div>

          {/* 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="hidden lg:flex items-center justify-center h-[500px]"
          >
            <Suspense fallback={<SplineFallback />}>
              <SplineScene />
            </Suspense>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
