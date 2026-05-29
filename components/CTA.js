'use client'

import { MessageCircle, Smartphone } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function CTA() {
  const ref = useScrollReveal()

  return (
    <section className="py-20 md:py-28" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="relative bg-gradient-to-br from-[#7364E3]/20 via-black to-[#F7F0FF]/10 rounded-[3rem] p-10 md:p-16 lg:p-24 overflow-hidden border border-white/10 reveal">
          {/* Background orb */}
          <div className="orb w-96 h-96 bg-[#7364E3]/20 top-0 right-0" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2
              className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-[-0.03em] mb-8 text-white"
              style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
            >
              Build your{' '}
              <span className="text-gradient-purple">future</span> with the{' '}
              <span className="text-gradient-purple">right people.</span>
            </h2>
            <p className="text-lg text-[#D7C7EC] mb-12 leading-relaxed">
              Don&apos;t build in isolation. Join an exclusive network of creators, freelancers, and
              founders who are defining the next era of building.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-[#7364E3] text-white px-10 py-5 rounded-full font-bold text-lg glow-purple hover:scale-105 active:scale-95 transition-all">
                Join DESGNEA Now
              </button>
              <div className="flex items-center gap-3">
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#5865F2] text-white p-4 rounded-full hover:opacity-90 hover:scale-105 transition-all"
                  aria-label="Join Discord"
                >
                  <MessageCircle size={20} />
                </a>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white p-4 rounded-full hover:opacity-90 hover:scale-105 transition-all"
                  aria-label="Join WhatsApp"
                >
                  <Smartphone size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
