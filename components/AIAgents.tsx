'use client'

import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'

const capabilities = [
  {
    title: 'Agentes Conversacionais',
    description: 'Chatbots inteligentes que compreendem linguagem natural e resolvem problemas complexos dos seus clientes.',
    icon: '💬',
  },
  {
    title: 'Processamento de Dados',
    description: 'Agentes que analisam grandes volumes de dados, extraem insights e geram relatorios automaticamente.',
    icon: '📊',
  },
  {
    title: 'Automacao Cognitiva',
    description: 'IA que aprende com os seus processos e toma decisoes inteligentes de forma autonoma.',
    icon: '🧠',
  },
  {
    title: 'Integracao Multi-Sistema',
    description: 'Agentes que conectam e orquestram multiplos sistemas, APIs e bases de dados sem intervencao humana.',
    icon: '🔗',
  },
]

export default function AIAgents() {
  return (
    <SectionWrapper id="ai-agents">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full"
          >
            AI Agents
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Agentes de IA{' '}
            <span className="gradient-text">Autonomos</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg mb-8"
          >
            Desenvolvemos agentes de inteligencia artificial que trabalham 24/7, aprendem com cada interacao
            e evoluem continuamente para oferecer resultados cada vez melhores.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex gap-8"
          >
            <div>
              <div className="text-3xl font-bold gradient-text">99.9%</div>
              <div className="text-sm text-gray-500">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">50x</div>
              <div className="text-sm text-gray-500">Mais rapido</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">24/7</div>
              <div className="text-sm text-gray-500">Disponivel</div>
            </div>
          </motion.div>
        </div>

        {/* Right cards */}
        <div className="grid gap-4">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              whileHover={{ x: 5 }}
              className="glass p-6 flex gap-4 items-start hover:bg-white/10 transition-all"
            >
              <span className="text-2xl flex-shrink-0">{cap.icon}</span>
              <div>
                <h3 className="text-white font-semibold mb-1">{cap.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{cap.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
