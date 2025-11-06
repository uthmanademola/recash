"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Need Cash Fast? Contact Us</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join thousands of Nigerians turning assets into instant cash. ReCash makes it safe, fast and
              transparent.
            </p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground group w-full sm:w-auto h-12"
                asChild
              >
                <a
                  href="https://forms.google.com/recash-sell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 justify-center"
                >
                   Sell Your Asset
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/5 w-full sm:w-auto bg-transparent h-12"
                asChild
              >
                <a href="https://forms.google.com/recash-buy" target="_blank" rel="noopener noreferrer">
                   Buy Distress Assets
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            className="pt-8 space-y-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <p className="text-sm font-semibold text-primary">🛡️ ReCash — Secure. Fast. Reliable.</p>
            <p className="text-xs text-muted-foreground">
          
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
