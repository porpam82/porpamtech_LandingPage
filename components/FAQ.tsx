'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from './SectionWrapper'

const faqs = [
  {
    question: 'Quanto tempo demora o desenvolvimento de um projeto?',
    answer: 'O prazo depende da complexidade do projecto. Projectos simples podem ser entregues em 4-6 semanas, enquanto soluções mais complexas podem levar 3-6 meses. Na fase de descoberta, definimos um cronograma detalhado e realista.',
  },
  {
    question: 'Que tipo de suporte oferecem após a entrega?',
    answer: 'Oferecemos planos de suporte contínuo que incluem manutenção preventiva, correção de bugs, actualizações de segurança e suporte técnico dedicado. Garantimos que o seu software funciona sempre na perfeição.',
  },
  {
    question: 'Trabalham com empresas de qualquer dimensão?',
    answer: 'Sim, trabalhamos com startups, PMEs e grandes empresas. Adaptamos a nossa abordagem e soluções às necessidades específicas de cada cliente, independentemente da dimensão.',
  },
  {
    question: 'Como funciona o processo de orçamentação?',
    answer: 'Após a reunião inicial de descoberta, apresentamos uma proposta detalhada com escopo, cronograma e investimento. Trabalhamos com preços fixos para projectos bem definidos ou time & materials para projectos mais flexíveis.',
  },
  {
    question: 'Que tecnologias utilizam?',
    answer: 'Utilizamos as tecnologias mais modernas e adequadas a cada projecto: React, Next.js, Node.js, Python, TypeScript, PostgreSQL, MongoDB, AWS, Google Cloud, entre outras. A escolha depende sempre dos requisitos específicos.',
  },
  {
    question: 'Como garantem a segurança dos dados?',
    answer: 'Seguimos as melhores práticas de cibersegurança, incluindo encriptação de dados, autenticação robusta, auditorias regulares e conformidade com RGPD. A segurança é uma prioridade em todos os nossos projectos.',
  },
]

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass overflow-hidden"
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
      >
        <span className="text-white font-medium pr-4">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-white/10 text-gray-400"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-5 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <SectionWrapper id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-yellow-300 bg-yellow-500/10 border border-yellow-500/20 rounded-full"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Perguntas{' '}
            <span className="gradient-text">Frequentes</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Encontre respostas para as questões mais comuns sobre os nossos serviços.
          </motion.p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
