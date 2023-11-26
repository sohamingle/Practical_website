import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import UIProvider from '@/providers/nextui-provider'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Practical Website',
  description: 'Download practicals',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UIProvider>
          <Toaster/>
          {children}
        </UIProvider>
      </body>
    </html>
  )
}
