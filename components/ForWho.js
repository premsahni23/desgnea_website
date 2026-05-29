'use client'

import { ArrowRight } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function ForWho() {
  const ref = useScrollReveal()

  const cards = [
    {
      tag: 'FOR STUDENTS',
      title: 'Bridging the Gap to Reality.',
      desc: 'Stop building sandboxes. Start building products that users actually touch. Learn through execution.',
      progress: 'w-1/3',
    },
    {
      tag: 'FOR FREELANCERS',
      title: 'Verified Trust at Scale.',
      desc: 'Eliminate the "trust gap" with clients. Our ecosystem provides the credentials and network to win high-ticket deals.',
      progress: 'w-2/3',
    },
    {
      tag: 'FOR FOUNDERS',
      title: 'High Performance Talent.',
      desc: 'Founders struggle to find vetted talent. We bridge that gap by connecting you with top-tier builders ready to scale.',
      progress: 'w-full',
    },
  ]

  return (
    <section id="for-who" className="py-20 md:py-28 relative overflow-hidden" ref={ref}>
      {/* Background orb */}
      <div className="orb w-[500px] h-[500px] bg-[#7364E3]/10 top-1/2 left-0 -translate-y-1/2" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={card.tag}
              className="bg-[#141218]/50 border border-white/5 p-8 md:p-12 rounded-[2rem] hover:border-[#7364E3]/50 transition-all group hover:-translate-y-2 reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span
                className="text-xs text-[#7364E3] uppercase tracking-widest mb-6 block"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {card.tag}
              </span>
              <h4
                className="text-2xl md:text-3xl font-bold text-white mb-6"
                style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
              >
                {card.title}
              </h4>
              <p className="text-[#D7C7EC] mb-10 leading-relaxed">{card.desc}</p>

              {/* Progress bar */}
              <div className="h-1 bg-white/5 w-full mb-10 overflow-hidden rounded-full">
                <div
                  className={`h-full bg-[#7364E3] ${card.progress} group-hover:w-full transition-all duration-700 rounded-full`}
                />
              </div>

              <button className="text-white font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                Explore Path <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
