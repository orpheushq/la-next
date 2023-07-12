import '@/app/globals.css'
import '@/styles/typography.css'
import { dir } from 'i18next'
import { languages } from '@/i18n/settings'
import { Inter } from 'next/font/google'
import React from 'react'
import { FooterBase } from '@/components/layout/FooterBase'
import { useTranslation } from '@/i18n'

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams (): Promise<Array<Record<string, string>>> {
  return languages.map((lng) => ({ lng }))
}

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default async function RootLayout ({
  children,
  params: {
    lng
  }
}: {
  children: React.ReactNode
  params: { lng: string }
}): React.ReactNode {
  const { t } = await useTranslation(lng, 'footer')

  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>
        {children}
        <FooterBase t={t} lng={lng} />
      </body>
    </html>
  )
}
