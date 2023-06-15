import '@/app/globals.css'
import React from 'react'

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
      <body className={`bg-primary h-screen w-screen`}>
        {children}
      </body>
    </html>
  )
}
