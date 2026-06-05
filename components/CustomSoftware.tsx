'use client'

import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python',
  'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes',
  'TensorFlow', 'OpenAI', 'GraphQL', 'Redis', 'Tailwind CSS',
]

const features = [
  {
    title: 'Arquitectura Escalável',
    description: 'Sistemas desenhados para crescer com o seu negócio, suportando milhares de utilizadores.',
  },
  {
    title: 'Código de Qualidade',
    description: 'Desenvolvimento com as melhores práticas, testes automatizados e documentação completa.',
  },
  {
    title: 'Entrega Contínua',
    description: 'Pipelines de CI/CD que garantem deploys seguros e rápidos em produção.',
  },
  {
    title: 'Suporte Dedicado',
    description: 'Equipa dedicada disponível para manutenção, actualizações e suporte técnico contínuo.',
  },
]

export default function CustomSoftware() {
  return (
    <SectionWrapper id="software">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left - Tech stack visualization */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="glass p-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-3 text-sm text-gray-500 font-mono">tech-stack.config</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:border-purple-500/50 hover:text-white transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Decorative glow */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-purple-500/10 rounded-full blur-3xl" />
        </motion.div>

        {/* Right - Content */}
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full"
          >
            Software à Medida
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Soluções{' '}
            <span className="gradient-text">Personalizadas</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg mb-8"
          >
            Cada negócio é único. Desenvolvemos software totalmente personalizado
            que se adapta perfeitamente aos seus processos e objectivos.
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all"
              >
                <h3 className="text-white font-semibold mb-1 text-sm">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
