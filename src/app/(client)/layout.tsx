import '@/app/globals.css'
import React from 'react'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}): React.ReactNode {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-primary min-h-screen min-w-screen`}>
        {children}
      </body>
    </html>
  )
}