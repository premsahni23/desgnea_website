import './globals.css'

export const metadata = {
  title: 'DESGNEA | Learn. Build. Grow.',
  description: 'A trust-first ecosystem where students learn industry skills, freelancers build high-ticket opportunities, and founders grow scalable startups.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Hanken+Grotesk:wght@600;700;800&family=JetBrains+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
