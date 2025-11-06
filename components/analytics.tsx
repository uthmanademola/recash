"use client"

import { useEffect } from "react"

export default function Analytics() {
  useEffect(() => {
    // Google Analytics 4
    if (typeof window !== "undefined" && !window.gtag) {
      const script = document.createElement("script")
      script.async = true
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" // Replace with your GA4 ID
      document.head.appendChild(script)

      window.dataLayer = window.dataLayer || []
      function gtag(...args: any[]) {
        window.dataLayer.push(arguments)
      }
      window.gtag = gtag
      gtag("js", new Date())
      gtag("config", "G-XXXXXXXXXX") // Replace with your GA4 ID
    }

    // Track button clicks
    const trackEvent = (buttonType: string) => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "cta_click", {
          button_type: buttonType,
          timestamp: new Date().toISOString(),
        })
      }
    }

    // Add click listeners to all CTA buttons
    const buttons = document.querySelectorAll('a[href*="forms.google.com"]')
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const href = button.getAttribute("href")
        const buttonType = href?.includes("recash-sell") ? "sell" : "buy"
        trackEvent(buttonType)
      })
    })

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", () => {})
      })
    }
  }, [])

  return null
}
