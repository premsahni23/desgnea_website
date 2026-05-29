'use client'

import Image from 'next/image'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Showcase() {
  const ref = useScrollReveal()

  return (
    <section id="showcase" className="py-20 md:py-28" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 md:mb-16 gap-6 reveal">
          <div>
            <p
              className="text-xs text-[#7364E3] uppercase tracking-[0.3em] mb-4"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              THE SHOWCASE
            </p>
            <h2
              className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-[-0.03em] text-white"
              style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
            >
              Built by the <br />
              Community.
            </h2>
          </div>
          <button className="flex items-center gap-2 text-white font-bold hover:gap-4 transition-all whitespace-nowrap">
            View All Projects{' '}
            <span className="material-symbols-outlined text-base">east</span>
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 reveal">
          {/* Large card */}
          <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden glass group relative min-h-[300px] md:min-h-[400px]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-8BpXz2I8T-QGeoqC1-OohyL2tmo2mqbJr3kjT4Kv_3t2qCo9Dqb7lXiC0Mb-gWS9qIvyJ_O4f0EMzr0wtgY1pySPus6qyDxlDk17t-ICI6LnJ27CVAu_OPKBGe7kVVyORwbayQ0t8XVAkWE8rEeCVw4jLHTqo70X6epVDTGT23eao3wOfv1aNYSWl7Vff2msQdj47Ssmw4tzUp34hEpnyYDVACLxDzM9dhxah6UWNm7-NKWz_6aksvJ8YzDpXOUYA92lRIljTbE"
              alt="AI Design Assistant Project"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 md:p-8 flex flex-col justify-end">
              <span
                className="text-xs text-[#7364E3] mb-2"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                HACKATHON WINNER
              </span>
              <h4
                className="text-xl md:text-2xl font-bold text-white"
                style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
              >
                AI Design Assistant
              </h4>
              <p className="text-sm text-[#D7C7EC] mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                A collaborative tool for Figma users.
              </p>
            </div>
          </div>

          {/* Small card 1 */}
          <div className="rounded-3xl overflow-hidden glass group relative aspect-square">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFXg7xDPix2y20uMK9fuBBlzdEZ22QBqBQfYIw-Zgjlq1A67Lm2UBcTgt1mxbWTMEaTvTPeyv-2b0ilMcLYq_g65rUIun_OfA3CxOjzPFOmbaVSf5EMV51ZBygvOniRvY2VQmURn6v2Ry99dD4_LtRhsZszHk5N7q5eBbBqh793C-FkFedsZApHgVUMsUAg6Vqyf6pb3aQU5Jz7vAlP2-fDZfLG9Qe-CW6r9XH36W0_hsnUD6RogxGMu8xDVlDeO-4ppNA3ekDQSY"
              alt="Community Project"
              fill
              className="object-cover group-hover:scale-110 transition-all opacity-60"
              unoptimized
            />
          </div>

          {/* Small card 2 */}
          <div className="rounded-3xl overflow-hidden glass group relative aspect-square">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIgesE34kAoX12tg-vZzd5ZcSQKyD4m5f2Q2fE92Tq66MBiwl5qVJb03WcTce9GwOruRUCorynzmZhwwSJYeKM5AuX0t5ulfaRqIxUahmBdprnjqOKdeq-PZiuEkp7ZmXkkjEwEsG0r6SievxfG3RIqA61mKgrIiy6ElH9vHtl0GSa8hEHxkMeaNUlKNeZrZ4AvdIAmPyMZpaJ0ldNnd_9bzn7GjgtDCVXBsN0V5aFFYiNJwiPw1oIw2h_8HQbSvbh1gCybQlaGpA"
              alt="Community Project"
              fill
              className="object-cover group-hover:scale-110 transition-all opacity-60"
              unoptimized
            />
          </div>

          {/* Wide card */}
          <div className="col-span-2 rounded-3xl overflow-hidden glass group relative h-48 md:h-64">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUgRgbAsCiB9DpS5Z4nkFiM11BNm0A7bWjJvRIiA-ZAyuAB98MHVAUvVMm6_f81TrB55BU1pNZohRh7YUjlBc5V06zfQ6fYZ5BnZf5tC19eJwclQwY-CKHGfN258FfIU8KyT6Dj9pEFMY4QnoVGfnr6mbqhPQQSfy2Dfjk-iy5BBDIVVKSjP66p9W9HGsz21meQzTwTs8dixV_9ZbrFSaqiazWUVbe560yUmNJQnHdEtUSkFnzjl9BcMj6sJZH33JeKuqWWH87am8"
              alt="Community Project"
              fill
              className="object-cover group-hover:scale-105 transition-all opacity-60"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
              <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm">
                View Case Study
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
