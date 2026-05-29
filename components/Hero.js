'use client'

import { BookOpen, Terminal, TrendingUp } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative pt-32 pb-20 md:pb-28 overflow-hidden grid-bg min-h-screen flex items-center">
      {/* Background orb */}
      <div className="orb w-[600px] h-[600px] bg-[#7364E3]/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-[1280px] mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 items-center gap-16 lg:gap-20">

          {/* Left Content */}
          <div className="fade-up text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#7364E3]/10 border border-[#7364E3]/20 rounded-full mb-6">
              <span
                className="text-xs font-mono text-[#7364E3] uppercase tracking-widest"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                Available Now
              </span>
              <span className="w-1 h-1 bg-[#7364E3] rounded-full" />
              <span
                className="text-xs font-mono text-[#D7C7EC]"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                Join 500+ builders
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-extrabold leading-[1.1] tracking-[-0.04em] mb-6 text-white"
              style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
            >
              Learn. Build. <br />
              <span className="text-gradient-purple">Grow.</span>
            </h1>

            <p className="text-lg text-[#D7C7EC] max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0">
              A trust-first ecosystem where students learn industry skills, freelancers build
              high-ticket opportunities, and founders grow scalable startups.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="bg-[#7364E3] text-white px-8 py-4 rounded-full font-bold text-base glow-purple hover:opacity-90 hover:scale-105 active:scale-95 transition-all">
                Get Started Free
              </button>
              <button
                onClick={() => scrollToSection('#showcase')}
                className="border border-[#D7C7EC]/30 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white/5 transition-all"
              >
                View Showcase
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center">
            {/* Glow orb */}
            <div className="absolute w-[350px] h-[350px] bg-[#7364E3]/20 rounded-full blur-3xl animate-pulse" />

            {/* Central ring */}
            <div className="absolute w-32 h-32 border border-[#7364E3]/30 rounded-full flex items-center justify-center z-10">
              <span
                className="text-5xl font-extrabold text-white"
                style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
              >
                D
              </span>
            </div>

            {/* Orbiting card - Learn */}
            <div
              className="absolute top-[15%] left-[0%] w-44 glass p-5 rounded-xl shadow-2xl z-20 orbit"
              style={{ animationDelay: '-2s' }}
            >
              <div className="w-10 h-10 bg-[#F7F0FF] rounded-lg flex items-center justify-center mb-3">
                <BookOpen size={20} className="text-[#7364E3]" />
              </div>
              <p className="font-bold text-white text-sm mb-1">Learn</p>
              <p className="text-xs text-[#D7C7EC]">Skill mastery through mentorship.</p>
            </div>

            {/* Orbiting card - Build */}
            <div
              className="absolute top-[45%] right-[5%] w-44 glass p-5 rounded-xl shadow-2xl z-20 orbit"
              style={{ animationDelay: '-5s' }}
            >
              <div className="w-10 h-10 bg-[#D7C7EC] rounded-lg flex items-center justify-center mb-3">
                <Terminal size={20} className="text-black" />
              </div>
              <p className="font-bold text-white text-sm mb-1">Build</p>
              <p className="text-xs text-[#D7C7EC]">Real-world product execution.</p>
            </div>

            {/* Orbiting card - Grow */}
            <div
              className="absolute bottom-[20%] left-[20%] w-44 glass p-5 rounded-xl shadow-2xl z-20 orbit"
              style={{ animationDelay: '-8s' }}
            >
              <div className="w-10 h-10 bg-[#7364E3] rounded-lg flex items-center justify-center mb-3">
                <TrendingUp size={20} className="text-white" />
              </div>
              <p className="font-bold text-white text-sm mb-1">Grow</p>
              <p className="text-xs text-[#D7C7EC]">Scale with AI-native systems.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
