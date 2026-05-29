'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Ecosystem() {
  const ref = useScrollReveal()

  const cards = [
    {
      icon: 'menu_book',
      iconBg: 'bg-[#F7F0FF]',
      iconColor: 'text-[#7364E3]',
      title: 'Learn',
      desc: 'Master high-demand skills with direct industry mentorship and verified learning paths.',
      items: ['Industry Mentorship', 'Workshop Access', 'Skill Validation'],
    },
    {
      icon: 'construction',
      iconBg: 'bg-[#D7C7EC]',
      iconColor: 'text-black',
      title: 'Build',
      desc: 'Execute real projects for real clients. Transition from learning to professional delivery.',
      items: ['Freelance Opportunities', 'Portfolio Projects', 'Collaborative Sprints'],
    },
    {
      icon: 'trending_up',
      iconBg: 'bg-[#7364E3]',
      iconColor: 'text-white',
      title: 'Grow',
      desc: 'Scale your ventures with AI-driven workflows and access to a vetted talent pool.',
      items: ['Startup Scaling', 'AI-Native Systems', 'Founder Network'],
      glow: true,
    },
  ]

  return (
    <section id="ecosystem" className="py-20 md:py-28 bg-black" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p
            className="text-xs text-[#7364E3] uppercase tracking-[0.3em] mb-4"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            THE ECOSYSTEM
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-[-0.03em] text-white"
            style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
          >
            One Journey. Three Stages. <br />
            <span className="text-gradient-purple">Infinite Possibilities.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="glass glass-hover p-8 md:p-10 rounded-3xl flex flex-col items-center text-center group reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div
                className={`w-16 h-16 ${card.iconBg} rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-12 transition-transform ${
                  card.glow ? 'shadow-[0_0_20px_rgba(115,100,227,0.5)]' : ''
                }`}
              >
                <span className={`material-symbols-outlined text-2xl ${card.iconColor}`}>
                  {card.icon}
                </span>
              </div>
              <h3
                className="text-2xl font-bold text-white mb-4"
                style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
              >
                {card.title}
              </h3>
              <p className="text-[#D7C7EC] mb-8 leading-relaxed">{card.desc}</p>
              <ul className="text-sm space-y-3 text-white/70">
                {card.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
