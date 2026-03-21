import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HansThill — Full-Stack Developer',
  description: 'Full-stack developer specializing in Next.js, React, and TypeScript. Building complete web solutions and landing pages.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
