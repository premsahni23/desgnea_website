'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Features() {
  const ref = useScrollReveal()

  const features = [
    {
      title: 'Trust-First Network',
      desc: 'Verified credentials and performance history for every member in the ecosystem.',
    },
    {
      title: 'AI Native Tools',
      desc: 'Access proprietary AI systems designed to accelerate your development and design cycle.',
    },
    {
      title: 'Global Collaboration',
      desc: 'Connect with creators and founders from over 30 countries in real-time.',
    },
    {
      title: 'Industry Credentials',
      desc: 'Earn certificates and badges that are recognized by top tech employers and startups.',
    },
    {
      title: 'Exclusive Events',
      desc: 'Early access to hackathons, founder meetups, and design sprints globally.',
    },
    {
      title: 'Financial Growth',
      desc: 'Direct pipeline to high-paying freelance gigs and potential startup investment.',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-black/50" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-6">
        <h2
          className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-[-0.03em] text-center mb-16 text-white reveal"
          style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
        >
          Engineered for <span className="text-[#7364E3]">Excellence.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="glass p-8 rounded-2xl border-white/5 hover:border-[#7364E3]/30 transition-colors reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <h5
                className="text-xl font-bold text-white mb-3"
                style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
              >
                {f.title}
              </h5>
              <p className="text-sm text-[#D7C7EC] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
