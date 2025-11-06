"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-20 pb-12">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], rotate: [0, 90, 360] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground text-balance"
                style={{ lineHeight: "0.96" }}
                variants={itemVariants}
              >
                Distress Sales <span className="text-accent"> Made Simple and Fast</span>
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed"
                variants={itemVariants}
              >
                ReCash makes it easy to convert assets into cash fast. Whether you are facing an emergency or need quick liquidity, our secure platform connects you to our network of verified buyers and ensures secure transactions. Get paid in hours not weeks.
              </motion.p>
            </div>

            {/* Trust Badges */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-foreground">Fast & Reliable</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-foreground">Verified Sellers</span>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-foreground">Good Price</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group h-12" asChild>
                <a
                  href="https://forms.google.com/recash-sell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Sell Your Asset
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/5 bg-transparent h-12"
                asChild
              >
                <a href="https://forms.google.com/recash-buy" target="_blank" rel="noopener noreferrer">
                  Buy Distress Assets
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 lg:h-full min-h-[400px] flex items-center justify-center"
          >
            <div className="relative w-full h-full max-w-md">
              {/* Background decorative layers */}
              <motion.div
                className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl border-2 border-primary/20"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/recash-hero-image.png"
                  alt="ReCash Assets Showcase"
                  className="rounded-3xl w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
