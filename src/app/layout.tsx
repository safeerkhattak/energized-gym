import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Crossed Sports Arena - Transform Your Limits',
  description: 'Experience the ultimate fitness journey at Crossed Sports Arena...',
  // All your metadata settings as you've defined before
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-black text-white"    cz-shortcut-listen="true">
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">
            {children}
          </main>
        </div>

        {/* Preload critical images */}
        <link rel="preload" as="image" href="/img/gym-reception.jpg" />
        <link rel="preload" as="image" href="/img/gym-interior-2.jpg" />
        <link rel="preload" as="image" href="/img/gym-interior-3.jpg" />
      </body>
    </html>
  )
}
