'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Ecosystem', href: '#ecosystem' },
    { label: 'Benefits', href: '#for-who' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Community', href: '#stats' },
  ]

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/50'
          : 'bg-black/40 backdrop-blur-xl border-b border-white/5'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          {/* Logo + Desktop Links */}
          <div className="flex items-center gap-12">
            <a
              href="#"
              className="font-display text-2xl font-extrabold tracking-tighter text-white"
              style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
            >
              DESGNEA
            </a>
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-[#D7C7EC] hover:text-white transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-6">
            <button className="text-sm font-medium text-[#D7C7EC] hover:text-white transition-colors">
              Login
            </button>
            <button className="bg-[#7364E3] text-white px-6 py-2 rounded-full text-sm font-bold glow-purple hover:scale-105 active:scale-95 transition-all">
              Join Community
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu md:hidden border-t border-white/5 bg-black/95 backdrop-blur-xl ${
          menuOpen ? 'open' : ''
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-base font-medium text-[#D7C7EC] hover:text-white transition-colors py-2 border-b border-white/5"
            >
              {link.label}
            </button>
          ))}
          <div className="flex flex-col gap-3 pt-2 pb-4">
            <button className="text-sm font-medium text-[#D7C7EC] hover:text-white transition-colors text-left">
              Login
            </button>
            <button className="bg-[#7364E3] text-white px-6 py-3 rounded-full text-sm font-bold glow-purple w-full">
              Join Community
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
