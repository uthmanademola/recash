"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-primary/5 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>© {currentYear} Bolingo Investment Expert Ltd. All rights reserved. ReCash is a product of Bolingo Investment Experts Ltd, a duly registered business entity in Nigeria. For enquiries, please send an email to support@recash.ng
          or call +234 703 620 1650.</p>
        </motion.div>
      </div>
    </footer>
  )
}
