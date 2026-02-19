import React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Cormorant_Garamond, Cinzel } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
})

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Marketly — Premium Digital Marketing Agency",
  description:
    "Transform your brand with premium digital marketing solutions. 500+ projects completed, 120+ happy clients, 10+ years of expertise.",

  icons: {
    icon: "https://ik.imagekit.io/j0xzq9pns/Marketly-removebg-preview.png",
    shortcut: "https://ik.imagekit.io/j0xzq9pns/Marketly-removebg-preview.png",
    apple: "https://ik.imagekit.io/j0xzq9pns/Marketly-removebg-preview.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${geistMono.variable} ${cormorant.variable} ${cinzel.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
