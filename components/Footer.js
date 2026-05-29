'use client'

export default function Footer() {
  const platformLinks = ['Ecosystem', 'Showcase', 'Testimonials', 'Events']
  const legalLinks = ['Privacy Policy', 'Terms of Service', 'Cookie Policy']

  return (
    <footer className="bg-black py-20 md:py-28 border-t border-white/5 relative overflow-hidden">
      {/* Grid texture */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2">
            <a
              href="#"
              className="font-display text-2xl font-extrabold tracking-tighter text-white block mb-6"
              style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
            >
              DESGNEA
            </a>
            <p className="text-[#D7C7EC] max-w-sm leading-relaxed mb-8">
              The premium ecosystem for students, freelancers, and founders. Learn skills, build
              projects, and grow ventures in a trust-first environment.
            </p>
            <div className="flex gap-4">
              {[
                { label: '𝕏', href: '#' },
                { label: 'in', href: '#' },
                { label: 'ig', href: '#' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-[#7364E3]/20 transition-all text-sm font-bold"
                  aria-label={social.label}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h6
              className="text-white font-bold mb-6 uppercase text-xs tracking-widest"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              Platform
            </h6>
            <ul className="space-y-4 text-sm text-[#D7C7EC]">
              {platformLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h6
              className="text-white font-bold mb-6 uppercase text-xs tracking-widest"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              Legal
            </h6>
            <ul className="space-y-4 text-sm text-[#D7C7EC]">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#D7C7EC]/50">
            © 2024 DESGNEA Community. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-[#D7C7EC]/50">System Operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
