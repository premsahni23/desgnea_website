'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Stats() {
  const ref = useScrollReveal()

  const stats = [
    { value: '500+', label: 'Members Joined' },
    { value: '120+', label: 'Projects Built' },
    { value: '15k',  label: 'Community Reach' },
    { value: '98%',  label: 'Success Rate' },
  ]

  return (
    <section id="stats" className="py-20 md:py-28 border-y border-white/5" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <p
                className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white mb-2 leading-[1.1] tracking-[-0.03em]"
                style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
              >
                {stat.value}
              </p>
              <p
                className="text-xs text-[#7364E3] tracking-widest uppercase"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
