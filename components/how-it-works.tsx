"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Upload, Users, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Upload,
    title: "List Your Asset",
    description: "Upload basic details about your asset via our simple form. Takes just 5 minutes.",
    number: 1,
  },
  {
    icon: Users,
    title: "Get Matched with Buyers",
    description: "ReCash connects you safely and quickly with verified buyers ready to purchase.",
    number: 2,
  },
  {
    icon: CheckCircle,
    title: "Complete Your Sale",
    description: "Receive instant cash for your sold asset. No hidden fees, no delays.",
    number: 3,
  },
]

export default function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="how-it-works" className="w-full py-20 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to turn your assets into instant cash.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="relative h-full p-8 border-border/50 hover:border-accent/50 transition-colors group">
                  {/* Number badge */}
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.number}
                  </div>

                  <div className="space-y-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-accent/10 transition-colors"
                    >
                      <Icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                    </motion.div>

                    <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 text-accent opacity-40">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
