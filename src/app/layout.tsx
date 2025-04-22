import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import ThemeProvider from '@/styles/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dev Portfolio | Frontend and Backend Developer Christian Burnham',
  description:
    'Web Developer Portfolio showcasing frontend and backend projects built with React, Next.js, Node.js, Expresss and Nest.js by Christian Burnham | AttisDev92',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          props={{
            attribute: 'class',
            defaultTheme: 'system',
            enableSystem: true,
            disableTransitionOnChange: true,
          }}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
