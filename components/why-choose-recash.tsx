"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Clock, Lock, Zap } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Speed",
    description:
      "Get cash in hours, not weeks. Our fast-track verification process means you receive payment within 48-72 hours of matching with a buyer.",
  },
  {
    icon: Lock,
    title: "Safety",
    description:
      "Verified transactions with no fraud. All buyers and sellers are thoroughly vetted to ensure a secure and trustworthy experience.",
  },
  {
    icon: Zap,
    title: "Fair Value",
    description:
      "Physical inspection and valuation done by experts to ensure that you get the best value for your assets. Safe transaction guaranteed!",
  },
]

export default function WhyChooseReCash() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="why-recash" className="w-full py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Why Choose ReCash</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine speed, safety and fairness to provide the best distress asset liquidation experience in Nigeria.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full p-8 border-border/50 hover:border-primary/50 hover:shadow-lg transition-all group">
                  <div className="space-y-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all"
                    >
                      <Icon className="w-8 h-8 text-primary" />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          className="mt-16 p-8 bg-primary/5 border border-primary/20 rounded-2xl text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-primary mb-2">🛡️ ReCash TRUST BADGE</p>
          <p className="text-foreground font-semibold">Secure • Fast • Reliable</p>
        </motion.div>
      </div>
    </section>
  )
}
