import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ricardo Blazquez - Desarrollador y Programador Web',
  description: 'Contrata a Ricardo Blazquez para crear tu aplicación web o móvil. Desarrollador web full-stack',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <main className='overflow-y-hidden min-h-screen min-w-screen'>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />
            {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  )
}
