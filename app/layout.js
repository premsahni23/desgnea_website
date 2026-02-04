import './globals.css'

export const metadata = {
  title: 'Figma App - AI Workflow Automation',
  description: 'Flexible AI workflow automation for technical teams',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}