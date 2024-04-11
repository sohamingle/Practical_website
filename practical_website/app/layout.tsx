import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import UIProvider from '@/providers/nextui-provider'
import { Toaster } from 'react-hot-toast'
import GoogleAnalyticsProvider from '@/providers/GoogleAnalyticsProvider'
import Script from 'next/script'

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
      <head>
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}></Script>
        <Script id="google-analytics">
          {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
                `}
        </Script>
      </head>
      <body className={inter.className}>
        <UIProvider>
          <Toaster />
          {children}
        </UIProvider>
      </body>
    </html>
  )
}
