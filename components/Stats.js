'use client'

import { Users, FolderGit2, Globe2, Star } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Stats() {
  const ref = useScrollReveal()

  const stats = [
    { Icon: Users,       value: '500+', label: 'Members Joined'   },
    { Icon: FolderGit2,  value: '120+', label: 'Projects Built'   },
    { Icon: Globe2,      value: '15k',  label: 'Community Reach'  },
    { Icon: Star,        value: '98%',  label: 'Success Rate'     },
  ]

  return (
    <section id="stats" className="py-20 md:py-28 border-y border-white/5" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center reveal group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-[#7364E3]/10 rounded-xl flex items-center justify-center group-hover:bg-[#7364E3]/20 transition-colors">
                  <stat.Icon size={22} className="text-[#7364E3]" />
                </div>
              </div>
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
