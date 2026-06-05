'use client'

import { motion } from 'framer-motion'

const footerLinks = {
  servicos: [
    { label: 'Desenvolvimento Web', href: '#servicos' },
    { label: 'Inteligência Artificial', href: '#ai-agents' },
    { label: 'Automação', href: '#automacao' },
    { label: 'Software à Medida', href: '#software' },
  ],
  empresa: [
    { label: 'Sobre Nós', href: '#' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Processo', href: '#processo' },
    { label: 'Contacto', href: '#contacto' },
  ],
  legal: [
    { label: 'Política de Privacidade', href: '#' },
    { label: 'Termos de Serviço', href: '#' },
    { label: 'RGPD', href: '#' },
  ],
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-teal-400 flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-white font-bold text-lg">PorpamTech</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Soluções premium de automação, inteligência artificial e desenvolvimento de software à medida.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {['LinkedIn', 'GitHub', 'Twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  aria-label={social}
                >
                  <span className="text-xs font-medium">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-500 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-500 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-500 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} PorpamTech. Todos os direitos reservados.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 text-sm text-gray-500 hover:text-white border border-white/10 rounded-full hover:bg-white/5 transition-all"
          >
            Voltar ao topo ↑
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
