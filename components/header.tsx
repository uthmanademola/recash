"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
            <Image src="/recash-logo.png" alt="ReCash Logo" width={120} height={32} className="h-8 w-auto" />
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#why-recash" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Why ReCash
            </a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-6" asChild>
                <a href="https://forms.google.com/recash-sell" target="_blank" rel="noopener noreferrer">
                  Sell
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden sm:block">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 bg-transparent h-12 px-6"
                asChild
              >
                <a href="https://forms.google.com/recash-buy" target="_blank" rel="noopener noreferrer">
                  Buy
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
