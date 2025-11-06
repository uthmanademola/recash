import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "Recash - Distress Sales Made Simple and Fast.",
  description:
    "ReCash helps Nigerians in distress sell their assets quickly and safely. Get connected to verified buyers and receive instant cash today.",
  keywords: "distress asset sales, quick cash Nigeria, sell assets fast, emergency funding",
  generator: "v0.app",
  openGraph: {
    title: "ReCash — Turn Your Assets Into Instant Cash in Nigeria",
    description: "Sell your assets quickly and safely. Connect with verified buyers and receive instant cash.",
    type: "website",
    url: "https://recash.com.ng",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "ReCash",
  },
  formatDetection: {
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#1E3A8A" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${poppins.variable} ${inter.variable} font-body antialiased bg-background text-foreground`}>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/sw.js').catch(() => {});
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
