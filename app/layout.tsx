import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Felipe Chatbot',
  description: 'Una app tierna de tu gato Felipe 🐱',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-felipe-cream text-gray-800 font-sans" suppressHydrationWarning={true} >
        {children}
      </body>
    </html>
  )
}