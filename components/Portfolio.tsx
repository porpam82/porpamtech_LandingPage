'use client'

import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'

const projects = [
  {
    title: 'Plataforma FinTech',
    category: 'Software à Medida',
    description: 'Sistema completo de gestão financeira com dashboards em tempo real e integração bancária.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    gradient: 'from-purple-600/20 to-blue-600/20',
  },
  {
    title: 'Assistente Virtual IA',
    category: 'AI Agents',
    description: 'Chatbot inteligente com processamento de linguagem natural para suporte ao cliente 24/7.',
    tech: ['Python', 'OpenAI', 'FastAPI'],
    gradient: 'from-blue-600/20 to-cyan-600/20',
  },
  {
    title: 'Automação Industrial',
    category: 'Automação',
    description: 'Sistema de automação de linha de produção com sensores IoT e monitorização remota.',
    tech: ['IoT', 'Python', 'AWS'],
    gradient: 'from-teal-600/20 to-green-600/20',
  },
  {
    title: 'E-Commerce Premium',
    category: 'Desenvolvimento Web',
    description: 'Loja online de alto desempenho com recomendações personalizadas baseadas em IA.',
    tech: ['Next.js', 'Stripe', 'MongoDB'],
    gradient: 'from-orange-600/20 to-pink-600/20',
  },
  {
    title: 'Sistema de Logística',
    category: 'Software à Medida',
    description: 'Plataforma de gestão logística com rastreamento GPS e optimização de rotas em tempo real.',
    tech: ['React', 'Go', 'Redis'],
    gradient: 'from-indigo-600/20 to-purple-600/20',
  },
  {
    title: 'Análise Preditiva',
    category: 'Inteligência Artificial',
    description: 'Modelos de machine learning para previsão de vendas e análise de tendências de mercado.',
    tech: ['TensorFlow', 'Python', 'BigQuery'],
    gradient: 'from-cyan-600/20 to-teal-600/20',
  },
]

export default function Portfolio() {
  return (
    <SectionWrapper id="portfolio">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-full"
        >
          Portfólio
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
        >
          Projetos que{' '}
          <span className="gradient-text">Inspiram</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          Conheça alguns dos projetos que desenvolvemos para clientes em diferentes setores e indústrias.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group glass overflow-hidden hover:bg-white/10 transition-all duration-300"
          >
            {/* Project image placeholder */}
            <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <span className="text-2xl font-bold text-white/80">
                    {project.title[0]}
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <span className="text-xs font-medium text-purple-400 uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-lg font-semibold text-white mt-2 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-teal-400 group-hover:bg-clip-text transition-all">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-gray-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
