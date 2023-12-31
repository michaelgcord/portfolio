import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Nunito } from 'next/font/google'
import { Poppins } from 'next/font/google'
import { Rubik } from 'next/font/google'

const nunito = Nunito({
  weight: ['200', '400', '500', '700'],
  subsets: ['latin'],
})

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

const rubik = Rubik({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Michael Cordero | Software Engineer',
  description: 'Michael Cordero Software Engineer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
