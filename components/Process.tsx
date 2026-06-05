'use client'

import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'

const steps = [
  {
    number: '01',
    title: 'Descoberta',
    description: 'Analisamos o seu negócio, identificamos desafios e definimos objectivos claros para o projecto.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Criamos protótipos e arquitectamos a solução ideal, validando cada decisão consigo.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    number: '03',
    title: 'Desenvolvimento',
    description: 'Construímos a solução com metodologias ágeis, mantendo-o informado em cada sprint.',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    number: '04',
    title: 'Entrega',
    description: 'Lançamos, monitorizamos e optimizamos continuamente para garantir resultados excepcionais.',
    color: 'from-teal-500 to-teal-600',
  },
]

export default function Process() {
  return (
    <SectionWrapper id="processo">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-green-300 bg-green-500/10 border border-green-500/20 rounded-full"
        >
          Processo
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
        >
          Como{' '}
          <span className="gradient-text">Trabalhamos</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          Um processo estruturado e transparente que garante resultados consistentes e de alta qualidade.
        </motion.p>
      </div>

      <div className="relative">
        {/* Connecting line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-teal-500/50 hidden lg:block -translate-y-1/2" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {/* Step card */}
              <div className="glass p-8 text-center hover:bg-white/10 transition-all group">
                {/* Number */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} items-center justify-center mb-6`}
                >
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </motion.div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-teal-400 group-hover:bg-clip-text transition-all">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
